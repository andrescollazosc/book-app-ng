import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { CategoryModel } from '../../models/category.model';
import { BookService } from '../../services/book.service';
import { CreateBookModel } from 'src/app/models/book.model';

@Component({
  selector: 'app-create-book-reactive',
  templateUrl: './create-book-reactive.component.html',
  styleUrls: ['./create-book-reactive.component.scss']
})
export class CreateBookReactiveComponent implements OnInit {

  public formBook: FormGroup = new FormGroup({
    categoryId: new FormControl(''),
    name: new FormControl(),
    author: new FormControl(),
    isbn: new FormControl(),
    pathImage: new FormControl(),
  });
  public categories: CategoryModel[] = [];

  constructor(private formBuilder: FormBuilder, 
              private _categoryService: CategoryService,
              private _bookService: BookService) { 
    this.createForm();
  }  

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.getCategories();
  }

  // Get Methods
  public get validateControlCategory() {
    return this.formBook.get('name')?.invalid && this.formBook.get('name')?.touched;
  }

  public get validateControlName() {
    return this.formBook.get('name')?.invalid && this.formBook.get('name')?.touched;
  }

  public get validateControlAuthor() {
    return this.formBook.get('author')?.invalid && this.formBook.get('author')?.touched;
  }

  public get validateControlIsbn() {
    return this.formBook.get('isbn')?.invalid && this.formBook.get('isbn')?.touched;
  }

  public get validateControlImagen() {
    return this.formBook.get('pathImage')?.invalid && this.formBook.get('pathImage')?.touched;
  }
  // End get methods  

  public submitBook(): void {

    if (this.formBook.invalid) {
      return Object.values(this.formBook.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => control.markAllAsTouched());
        } else {
          control.markAllAsTouched();
        }
      });
    }

    this.saveBook(this.formBook.value);
    
  }

  private saveBook(book: CreateBookModel): void {
    this._bookService.createBook(book)
    .subscribe(response => {
      console.log(response);      
    });
  }

  private createForm(): void {
    this.formBook = this.formBuilder.group({
      categoryId: ['', [ Validators.required ]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)] ],
      author: ['', [Validators.required,  Validators.minLength(3), Validators.maxLength(20)]],
      isbn: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      pathImage: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(200) ]],
    });
  }

  private getCategories(): void {
    this._categoryService.getCategories()
    .subscribe(response => {
      this.categories = response;
    });
  }

}

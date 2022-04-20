import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateBookModel } from 'src/app/models/book.model';
import { BookService } from '../../services/book.service';
import { CategoryService } from '../../services/category.service';
import { CategoryModel } from '../../models/category.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-book-page',
  templateUrl: './create-book-page.component.html',
  styleUrls: ['./create-book-page.component.scss']
})
export class CreateBookPageComponent implements OnInit {

  public book: CreateBookModel = {
    categoryId: '',
    author: '',
    name: '',
    isbn: '',
    pathImage: ''
  };
  public categories: CategoryModel[] = [];
  public isLoadData: boolean = false;

  constructor(private _bookService: BookService, 
    private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this.initializeData()
  }  

  public submitBook(bookForm: NgForm) : void {        
    if (bookForm.invalid) {
      Object.values(bookForm.controls).forEach(control => {
        control.markAllAsTouched();
      });

      return;
    }

    this.createBook(bookForm.value);
  }

  private createBook(book: CreateBookModel): void {
    debugger;
    this._bookService.createBook(book)
    .subscribe(response => {
      console.log(response);      
    }, error => {
      console.log(error);      
    });
  }

  private initializeData(): void {
    this.getCategories();
  }

  private getCategories(): void {
    this._categoryService.getCategories()
    .pipe(finalize(() => {
      this.isLoadData = true;
      console.log(this.categories);      
    }))
    .subscribe(response => {
      this.categories = response;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books: BookModel[] = [];
  public isLoad = false;

  constructor(private _bookService: BookService){}

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.getBooks();
  }

  private getBooks(): void {
    this._bookService.getBooks()
    .pipe(finalize(() => {
      this.isLoad = true;
    }))
    .subscribe(response => {
      this.books = response;
    });
  }

  public showAlert(value: string): void {
    alert(value);
  }

}

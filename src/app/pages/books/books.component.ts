import { Component, OnInit } from '@angular/core';
import { BookDataMock } from 'src/app/mocks/book-data.mocks';
import { BookModel } from 'src/app/models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books: BookModel[] = [];


  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.getBooks();
  }

  private getBooks(): BookModel[] {
    this.books = BookDataMock.getBooks();
    return this.books;
  }

  public showAlert(value: string): void {
    alert(value);
  }

}

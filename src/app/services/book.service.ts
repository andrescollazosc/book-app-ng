import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private URL_BASE: string = 'https://localhost:7021/api/';

  constructor(private _http: HttpClient) { }

  ///Book/books
  public getBooks(): Observable<BookModel[]> {
    // return this._http.get<BookModel[]>(this.URL_BASE + '/Book/books');
    return this._http.get<BookModel[]>(`${ this.URL_BASE }Book/books`);
  }


}

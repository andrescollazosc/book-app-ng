import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BookModel, CreateBookModel } from '../models/book.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private URL_BASE: string = `${ environment.base_url }Book`;

  constructor(private _http: HttpClient) { }

  public getBooks(): Observable<BookModel[]> {
    return this._http.get<BookModel[]>(`${ this.URL_BASE }`);
  }

  public getBookById(id: string): Observable<BookModel[]> {
    return this._http.get<BookModel[]>(`${ this.URL_BASE }${ id }`);
  }

  public createBook(book: CreateBookModel): Observable<BookModel> {
    return this._http.post<BookModel>(`${ this.URL_BASE }`, book);
  }

  public UpdateBook(book: BookModel): Observable<BookModel> {
    return this._http.put<BookModel>(`${ this.URL_BASE }`, book);
  }

}

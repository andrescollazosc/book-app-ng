import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CategoryModel } from '../models/category.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private URL_BASE: string = environment.base_url;

  constructor(private _http: HttpClient) { }

  public getCategories(): Observable<CategoryModel[]> {
    return this._http.get<CategoryModel[]>(`${ this.URL_BASE }category`);
  }

}

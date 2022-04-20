import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateBookPageComponent } from './pages/create-book-page/create-book-page.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "books", component: BooksComponent},
  {path: "create", component: CreateBookPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateBookPageComponent } from './pages/create-book-page/create-book-page.component';
import { CreateBookReactiveComponent } from './pages/create-book-reactive/create-book-reactive.component';
import { ROUTES } from './constants/routing.constants';

const routes_constants = ROUTES;

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: routes_constants.BOOKS, component: BooksComponent},
  {path: routes_constants.CREATE, component: CreateBookPageComponent},
  {path: routes_constants.CREATE_REACTIVE, component: CreateBookReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CreateBookPageComponent } from './pages/create-book-page/create-book-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateBookReactiveComponent } from './pages/create-book-reactive/create-book-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    HomeComponent,
    BooksComponent,
    BookPageComponent,
    SpinnerComponent,
    CreateBookPageComponent,
    NavbarComponent,
    CreateBookReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

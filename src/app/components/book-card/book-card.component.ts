import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookModel } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book: BookModel = {};
  @Output() onBookClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if (this.book.pathImage == null) {
      this.book.pathImage = '../../../assets/images/default-book1.png';
    }
  }

  public onResult(): void {
    this.onBookClicked.emit(this.book.author);
  }

}

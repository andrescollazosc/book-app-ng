import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookReactiveComponent } from './create-book-reactive.component';

describe('CreateBookReactiveComponent', () => {
  let component: CreateBookReactiveComponent;
  let fixture: ComponentFixture<CreateBookReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBookReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { ROUTES } from 'src/app/constants/routing.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public routes = ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}

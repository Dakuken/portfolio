import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // etc...
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [trigger('fade', [
    state('inactive', style({ opacity: 0 })),
    state('active', style({ opacity: 1 })),
    transition('* <=> *', [
      animate(2000)
    ])
  ]),]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



}

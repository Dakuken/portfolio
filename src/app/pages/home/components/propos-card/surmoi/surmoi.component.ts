import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'surmoi-component',
  templateUrl: './surmoi.component.html',
  styleUrls: ['./surmoi.component.scss'],
  animations : [
    trigger('animation1', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', animTo(0)),
      transition('true => false', animTo(1)),
    ])
  ]
})
export class SurmoiComponent implements OnInit {

  ani0 = [false]
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.ani0[0] = true
    },100)
  }

}

function animTo(base: number) {
  let fin = (base === 0) ? 1 : 0
  return [
    style({ opacity: base, }),
    animate('1000ms ease', style({ opacity: fin })),
  ]
}

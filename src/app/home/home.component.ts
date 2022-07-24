import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { anim } from '../route-animation';
import {

  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [anim,

    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ])]
})


export class HomeComponent implements OnInit {

  visible: boolean = false

  constructor() {

  }

  ngOnInit(): void {
  }


  onShow() {
    console.log("visible", this.visible);

    this.visible = !this.visible
  }


}


function pouet(po: boolean) {

}
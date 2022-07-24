import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { anim } from '../route-animation';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [anim]
})

@HostListener('window:resize', ['$event'])

export class HomeComponent implements AfterViewInit {

  @ViewChild('card1', { static: false }) card1!: ElementRef;
  @ViewChild('card2', { static: false }) card2!: ElementRef;
  @ViewChild('card3', { static: false }) card3!: ElementRef;
  p!: HTMLDivElement

  tabOffSetTop: number[] = []
  tab: string[] = ['false', 'false', 'false']
  heightItem2: number[] = []
  screenHeight!: number;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.screenHeight = window.innerHeight
    this.tabOffSetTop.push(this.card1.nativeElement.offsetTop)
    this.tabOffSetTop.push(this.card2.nativeElement.offsetTop)
    this.tabOffSetTop.push(this.card3.nativeElement.offsetTop)
    const e1 = <HTMLDivElement>this.renderer.selectRootElement('#card1', true);
    const e2 = <HTMLDivElement>this.renderer.selectRootElement('#card2', true);
    const e3 = <HTMLDivElement>this.renderer.selectRootElement('#card3', true);
    this.heightItem2.push(e1.clientHeight)
    this.heightItem2.push(e2.clientHeight)
    this.heightItem2.push(e3.clientHeight)
    this.makeALoopWait()
  }
  delay = async (ms = 1000) =>
    new Promise(resolve => setTimeout(resolve, ms))
  async makeALoopWait() {
    for (let i = 0; i <= this.tabOffSetTop.length - 1; i++) {
      await this.delay(200)
      if (this.tabOffSetTop[i] + this.heightItem2[i] < this.screenHeight)
        this.tab[i] = 'true'
    }
  }

  @HostListener('window:scroll', ['$event']) private onScroll($event: Event): void {
    if (this.tab[2] === 'true' && this.tab[1] === 'true' && this.tab[0] === 'true') {
      return
    }
    let scroll = window.scrollY + this.screenHeight

    if (scroll > this.tabOffSetTop[2] + this.heightItem2[2] && this.tab[2] !== 'true') {
      this.tab[2] = 'true'
    }
    if (scroll > this.tabOffSetTop[1] + this.heightItem2[1] && this.tab[1] !== 'true') {
      this.tab[1] = 'true'
    }
    if (scroll > this.tabOffSetTop[0] + this.heightItem2[0] && this.tab[0] !== 'true') {
      this.tab[0] = 'true'
    }
  };
}
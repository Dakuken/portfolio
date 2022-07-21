import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  wichPath?: string

  constructor(private router: Router) {
    setTimeout(() => {
      this.wichPath = this.router.url
    }, 100);

  }

  ngOnInit(): void {
  }


  goTo(path: string) {

    //? to avoid infinite refresh for nothing
    if (this.router.url !== path) {
      this.router.navigate([path])
      setTimeout(() => {
        this.wichPath = this.router.url
      }, 100);
    }
  }
}

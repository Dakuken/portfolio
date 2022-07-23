import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mobile: boolean = false

  title = 'Portfolio';

  mobileMenu: { title: string, click: () => void }[] = [
    {
      title: 'Accueil',
      click: () => {
        this.goTo('/home')
      }
    },
    {
      title: 'À propos',
      click: () => {
        this.goTo('/about-me')
      }
    },
    {
      title: 'Portfolio',
      click: () => {
        this.goTo('/portfolio')
      }
    }
  ]

  constructor(private router: Router) {

  }


  ngOnInit(): void {
    if (window.screen.width <= 500) {
      this.mobile = true;
    }
  }

  goTo(path: string) {
    //? to avoid infinite refresh for nothing
    if (this.router.url !== path) {
      this.router.navigate([path])
    }
  }


}

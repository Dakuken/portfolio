import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { slider } from './route-animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
  ]
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

  constructor(private router: Router, private contexts: ChildrenOutletContexts) {

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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

}

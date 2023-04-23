import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    ecommerceImages: string[] = ["./assets/images/ecommerce/ecommerce.png", "./assets/images/ecommerce/ecommerce2.png", "./assets/images/ecommerce/ecommerce3.png"];
    ecommerceCurrent = ["./assets/images/ecommerce/ecommerce.png"];

    genshinImages: string[] = ["./assets/images/genshin/genshin.png", "./assets/images/genshin/genshin2.png"];
    genshinCurrent = ["./assets/images/genshin/genshin.png"];

    reserveImage = [this.ecommerceImages, this.genshinImages]
    currentImage = [this.ecommerceCurrent, this.genshinCurrent]
    currentIndex = [0, 0];

    constructor() {
    }

    ngOnInit(): void {
    }

    changeIndexEcommerce(direction: number, nbIndex: number): void {

        this.currentIndex[nbIndex] = this.currentIndex[nbIndex] + direction;
        if (this.currentIndex[nbIndex] < 0) {
            this.currentIndex[nbIndex] = this.reserveImage[nbIndex].length - 1;
        }

        if (this.currentIndex[nbIndex] > this.reserveImage[nbIndex].length - 1) {
            this.currentIndex[nbIndex] = 0;
        }

        this.currentImage[nbIndex][0] = this.reserveImage[nbIndex][this.currentIndex[nbIndex]];
    }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { PriceCardComponent } from './components/price-card/price-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    PriceCardComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';
import { AboutMeComponent } from './about-me.component';



@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,

    NbCardModule
  ]
})
export class AboutMeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { NbIconModule } from '@nebular/theme';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    NbIconModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }

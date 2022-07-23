import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NbButtonModule, NbContextMenuModule } from '@nebular/theme';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NbContextMenuModule,
    NbButtonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }

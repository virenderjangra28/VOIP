import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftmenuRoutingModule } from './leftmenu-routing.module';
import { LeftmenuComponent } from './leftmenu.component';


@NgModule({
  declarations: [
    LeftmenuComponent
  ],
  imports: [
    CommonModule,
    LeftmenuRoutingModule
  ],
  exports : [
    LeftmenuComponent
  ]
})
export class LeftmenuModule { }

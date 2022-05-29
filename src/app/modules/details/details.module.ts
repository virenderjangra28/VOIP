import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { LeftmenuModule } from 'src/app/shared/leftmenu/leftmenu.module';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,HeaderModule , LeftmenuModule
  ]
})
export class DetailsModule { }

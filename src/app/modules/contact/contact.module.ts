import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { LeftmenuModule } from 'src/app/shared/leftmenu/leftmenu.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    LeftmenuModule,HeaderModule
  ]
})
export class ContactModule { }

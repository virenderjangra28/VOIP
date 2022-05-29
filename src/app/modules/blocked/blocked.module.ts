import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockedRoutingModule } from './blocked-routing.module';
import { BlockedComponent } from './blocked.component';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { LeftmenuModule } from 'src/app/shared/leftmenu/leftmenu.module';


@NgModule({
  declarations: [
    BlockedComponent
  ],
  imports: [
    CommonModule,
    BlockedRoutingModule,
    LeftmenuModule,HeaderModule
  ]
})
export class BlockedModule { }

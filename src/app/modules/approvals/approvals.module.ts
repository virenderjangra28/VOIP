import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalsRoutingModule } from './approvals-routing.module';
import { ApprovalsComponent } from './approvals.component';
import { LeftmenuModule } from 'src/app/shared/leftmenu/leftmenu.module';
import { HeaderModule } from 'src/app/shared/header/header.module';


@NgModule({
  declarations: [
    ApprovalsComponent
  ],
  imports: [
    CommonModule,
    ApprovalsRoutingModule, LeftmenuModule, HeaderModule
  ]
})
export class ApprovalsModule { }

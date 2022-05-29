import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { LeftmenuModule } from 'src/app/shared/leftmenu/leftmenu.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,HeaderModule,LeftmenuModule
  ]
})
export class DashboardModule { }

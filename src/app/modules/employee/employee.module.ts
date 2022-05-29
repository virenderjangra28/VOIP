import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { LeftmenuModule } from 'src/app/shared/leftmenu/leftmenu.module';
import { HeaderModule } from 'src/app/shared/header/header.module';


@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule, LeftmenuModule,HeaderModule
  ]
})
export class EmployeeModule { }

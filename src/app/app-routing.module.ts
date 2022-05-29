import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    loadChildren : ()=> import("./modules/login/login.module").then(m=> m.LoginModule)
  },
  {
    path : 'dashboard',
    loadChildren : ()=> import("./modules/dashboard/dashboard.module").then(m=> m.DashboardModule)
  },
  {
    path : 'approvals',
    loadChildren : ()=> import("./modules/approvals/approvals.module").then(m=> m.ApprovalsModule)
  },
  {
    path : 'total-employee',
    loadChildren : ()=> import("./modules/employee/employee.module").then(m=> m.EmployeeModule)
  },
  {
    path : 'blocked-employee',
    loadChildren : ()=> import("./modules/blocked/blocked.module").then(m=> m.BlockedModule)
  },
  {
    path : 'my-phone-number',
    loadChildren : ()=> import("./modules/contact/contact.module").then(m=> m.ContactModule)
  },
  {
    path : 'details/:id',
    loadChildren : ()=> import("./modules/details/details.module").then(m=> m.DetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

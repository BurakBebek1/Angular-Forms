import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';

const routes: Routes = [
  {path:'add-customer', component: AddCustomerComponent},
  {path:'loan-types', component:LoanTypesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

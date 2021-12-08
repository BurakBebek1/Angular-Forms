import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanTypesComponent } from './loan-types/loan-types.component';

@NgModule({
  declarations: [
    AppComponent,
      AddCustomerComponent,
      LoanTypesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,//Reactive formlarda ReactiveFormsModule'ü import etmeyi unutmamalıyız.
    FormsModule//Template Driven formlarda yada NgModel kullandığımız zaman FormsModule'ü import etmeyi unutmamalıyız.

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

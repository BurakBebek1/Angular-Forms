import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  firstname: string = '';
  terms: boolean = false;
  customerType: string = '';
  description: string = '';

  constructor() { }

  ngOnInit() {

    let defaultValues = {
      firstname: 'Burak',
      terms:true,
      customerType : '1',
      description : ''
    }

  }

  addCustomer(formValue: NgForm) {
    console.log(formValue.value);
  }

  setValues(formValue: NgForm) {
    let defaultValues = {
      firstname: 'Burak',
      terms:true,
      customerType : '1',
      description : ''
    }

    formValue.setValue(defaultValues);
  }

  resetForm(formValue: NgForm) {
    formValue.reset();
  }

}

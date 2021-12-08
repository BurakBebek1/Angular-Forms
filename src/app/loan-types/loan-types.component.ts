import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {

  addLoansTypeForm: FormGroup;

  constructor(private fb: FormBuilder) { }



  ngOnInit() {


    let users = new FormArray([
      new FormControl('Burak'),
      new FormControl('AngularForms')
    ]);
    // this.addLoansTypeForm = new FormGroup({
    //   'loanName': new FormControl(),
    //   'loanDescription': new FormControl(),
    //   'loanType': new FormControl()
    // })

    // FormBuilder kulanmak daha iyidir çünkü formlarımızı daha küçük parçalara ayırabilmemizi sağlar.
    // Daha reusable bir yapı oluşturur.
    //formcontrollere eklediğimiz boş tırnaklar değerleri setlediğimiz yer.
    //eğer dolu olarak girseydik sayfa yüklendiği zaman yazdığımız değerler input alanlarında gözükecekti.
    this.addLoansTypeForm = this.fb.group({
      'loanName': new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      //Validasyonları kullanmanın diğer bir yolu validator.compose dur.
      'loanDescription': new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ])),
      'loanType': new FormControl('',Validators.required),
      /*
      'users': new FormArray([
        new FormControl('Burak'),
        new FormControl('AngularForms')
      ])
      */
     //FormArray in FormGroup ile birlikte kullanımı.
      'users': new FormArray([
        this.fb.group({
          'name': new FormControl(''),
          'age': new FormControl(''),
          'dept': new FormControl('')
        })
      ])
    })
  }

  addLoanType() {
    //değer okumanın üç yolu
    console.log(this.addLoansTypeForm.value);
    //console.log(this.addLoansTypeForm.get('loanType').value);
    // this.addLoansTypeForm.valueChanges.subscribe(data => {
    //   console.log(data);
    // })
  }

  get users(): FormArray {
    return this.addLoansTypeForm.get('users') as FormArray;
  }

  addUser() {
    let userArr = this.addLoansTypeForm.get('users') as FormArray;
    let newUser = this.fb.group({
      'name': '',
      'age': '',
      'dept': ''
    });

    userArr.push(newUser);
  }

  removeUser(i) {
    let user = this.addLoansTypeForm.get('users') as FormArray;
    user.removeAt(i);
  }

  assignDept(i) {
    let arr = this.addLoansTypeForm.get('users') as FormArray;
    arr.value[i].dept = 'Forms';
    this.users.setValue(arr.value);
  }

  resetForm() {
    this.addLoansTypeForm.reset();
  }
}

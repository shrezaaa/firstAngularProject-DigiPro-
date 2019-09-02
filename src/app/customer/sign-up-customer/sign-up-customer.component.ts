import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-customer',
  templateUrl: './sign-up-customer.component.html',
  styleUrls: ['./sign-up-customer.component.css']
})
export class SignUpCustomerComponent implements OnInit {

  signUpForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'fname': new FormControl(null),
      'lname': new FormControl(null),
      'username': new FormControl(null , Validators.required),
      'password': new FormControl(null , Validators.required)
    })
  }
  
  onsubmit(){
    console.log(44555);
  }


}

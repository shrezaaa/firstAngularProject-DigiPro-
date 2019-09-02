import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServerService } from 'src/app/server.service';
import { Customer } from 'src/Shared/customer.model';

@Component({
  selector: 'app-sign-up-customer',
  templateUrl: './sign-up-customer.component.html',
  styleUrls: ['./sign-up-customer.component.css']
})
export class SignUpCustomerComponent implements OnInit {

  signUpForm : FormGroup;

  constructor(private srvService: ServerService  , private customer : Customer ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'fname': new FormControl(null),
      'lname': new FormControl(null),
      'username': new FormControl(null , Validators.required),
      'password': new FormControl(null , Validators.required)
    })
  }

  onsubmit(){
    this.customer.Fname = this.signUpForm.get('fname').value;
    this.customer.Lname = this.signUpForm.get('lname').value;
    this.customer.username = this.signUpForm.get('username').value;
    this.customer.password = this.signUpForm.get('password').value;
    this.srvService.onRegister(this.customer);
    
  }


}

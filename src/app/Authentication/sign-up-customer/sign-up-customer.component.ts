import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { authService } from 'src/app/Auth.service';
import { Customer } from 'src/Shared/customer.model';

@Component({
  selector: 'app-sign-up-customer',
  templateUrl: './sign-up-customer.component.html',
  styleUrls: ['./sign-up-customer.component.css']
})
export class SignUpCustomerComponent implements OnInit {

  signUpForm : FormGroup;

  cust = [];

  Message : string;

  constructor(private srvService: authService ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'fname': new FormControl(null, Validators.required),
      'lname': new FormControl(null, Validators.required),
      'email': new FormControl(null , Validators.required),
      'password': new FormControl(null , Validators.required)
    })
  }

  setColor(){
    return this.signUpForm.status === "VALID" ? "green" : "red";
  }

  onsubmit(){
    let customer = new Customer(this.signUpForm.get('fname').value,this.signUpForm.get('lname').value,this.signUpForm.get('email').value,
    this.signUpForm.get('password').value,[],[],false);
  
    if(this.signUpForm.status === 'VALID')
      {       
      console.log(customer.email);
       
        this.cust.push(customer);

        this.srvService.onRegister(this.cust , customer).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)   
        )
        this.Message = 'Sign Up Successfully ...!  >_-';
        this.cust = [];
      }else{
        this.Message = 'Fill out all of the inputs ...!'
      }
  }


}

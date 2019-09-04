import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { authService } from 'src/app/Auth.service';

@Component({
  selector: 'app-sign-in-customer',
  templateUrl: './sign-in-customer.component.html',
  styleUrls: ['./sign-in-customer.component.css']
})
export class SignInCustomerComponent implements OnInit {

  constructor(private authService : authService) { }

  SignInForm : FormGroup;

  ngOnInit() {
    this.SignInForm = new FormGroup({
      'email' : new FormControl(null),
      'password' : new FormControl(null),
    })
  }

  onLogin(){
    const email = this.SignInForm.get('email').value;
    const pass = this.SignInForm.get('password').value;
    console.log(email);
    console.log(pass);
    
    this.authService.Login(email,pass);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { authService } from 'src/app/Auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sign-in-customer',
  templateUrl: './sign-in-customer.component.html',
  styleUrls: ['./sign-in-customer.component.css']
})
export class SignInCustomerComponent implements OnInit {

  constructor(private authService : authService , private router : Router ,private route: ActivatedRoute) { }

  SignInForm : FormGroup;

  ngOnInit() {
    this.SignInForm = new FormGroup({
      'email' : new FormControl(null),
      'password' : new FormControl(null),
    })
  }

  onLogin(){
    console.log(this.authService.isSignin);

    const email = this.SignInForm.get('email').value;
    const pass = this.SignInForm.get('password').value;
    this.authService.Login(email,pass);

    console.log(this.authService.isSignin);
    
    // this.authService.isSignin = false;
    if(this.authService.isSignin){
      this.router.navigate(['/home']);
    }

  }

}

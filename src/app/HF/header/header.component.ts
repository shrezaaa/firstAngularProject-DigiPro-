import { Component, OnInit } from '@angular/core';
import { authService } from 'src/app/Auth.service';
import { Subscriber, observable, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Auth : authService) {}

  ngOnInit() {
    
  }

  signedIn(){
    return this.Auth.isSignin;
  }

  onLogOut(){
      this.Auth.logOut;
      this.Auth.isSignin = false; 
  }

}

import { NgModule } from "@angular/core";
import { SignInCustomerComponent } from './sign-in-customer/sign-in-customer.component';
import { SignUpCustomerComponent } from './sign-up-customer/sign-up-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations : [
        SignInCustomerComponent,
        SignUpCustomerComponent
    ] , 
    imports:[

         ReactiveFormsModule,
         CommonModule,
         AppRoutingModule
    ],
    exports:[
        SignInCustomerComponent,
        SignUpCustomerComponent
    ]
})

export class AuthModule{

}
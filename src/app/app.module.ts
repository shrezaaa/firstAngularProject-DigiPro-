import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpCustomerComponent } from './customer/sign-up-customer/sign-up-customer.component';
import { ServerService } from './server.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInCustomerComponent } from './customer/sign-in-customer/sign-in-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    ProductListComponent,
    AboutUsComponent,
    FooterComponent,
    SignUpCustomerComponent,
    SignInCustomerComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule

  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { HFModule } from './HF/HF.module';
import { ProductService } from './product.service';
import { AuthModule } from './Authentication/Auth.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { authService } from './Auth.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './customer/profile/profile.component';
import { environment } from '../environments/environment'
import { SharedModule } from 'src/Shared/shared.module';
import { CustomerService } from './customer.service';
import { CustomerModule } from './customer/customer.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AboutUsComponent,

  ],
  imports: [
    SharedModule,
    HFModule,
    AuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomerModule

  ],
  exports: [

  ],
  providers: [authService, ProductService , CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {}

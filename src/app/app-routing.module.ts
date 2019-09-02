import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignUpCustomerComponent } from './customer/sign-up-customer/sign-up-customer.component';
import { SignInCustomerComponent } from './customer/sign-in-customer/sign-in-customer.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: ProductListComponent },
    { path: 'About-us', component: AboutUsComponent },
    { path: 'sign-in', component: SignInCustomerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

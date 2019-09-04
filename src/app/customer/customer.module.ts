import { NgModule } from "@angular/core";
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'src/Shared/shared.module';

@NgModule({
    declarations:[
        CustomerComponent,
        ProfileComponent
    ],
    imports: [
        SharedModule
    ]
})

export class CustomerModule{

}
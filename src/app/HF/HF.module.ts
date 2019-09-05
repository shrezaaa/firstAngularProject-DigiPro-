import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from 'src/Shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({

    declarations:[
        HeaderComponent,
        FooterComponent
    ],
    imports:[
        SharedModule,
        CommonModule,
        RouterModule,
    ],
    exports:[
        HeaderComponent,
        FooterComponent
    ]

})
export class HFModule{

}
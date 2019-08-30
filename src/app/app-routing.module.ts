import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

const appRoutes : Routes = [
    {path : '' , redirectTo: '/home' , pathMatch : 'full'},
    {path : 'home' ,component : ProductListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule {}

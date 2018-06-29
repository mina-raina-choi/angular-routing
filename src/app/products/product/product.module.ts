import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from "./product.component";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: ProductComponent }
]

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
    ],
    declarations: [
        ProductComponent
    ],
    providers: [

    ]
})
export class ProductModule { }
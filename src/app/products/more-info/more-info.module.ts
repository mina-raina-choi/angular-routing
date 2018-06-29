import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MoreInfoComponent } from "./more-info.component";


const routes: Routes = [
    { path: '', component: MoreInfoComponent }
]

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
    ],
    declarations: [
        MoreInfoComponent
    ],
    providers: [

    ]
})
export class MoreInfoModule { }
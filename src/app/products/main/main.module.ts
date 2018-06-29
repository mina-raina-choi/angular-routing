import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main.component";

const routes: Routes = [
    { path: '', component: MainComponent }
]

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
    ],
    declarations: [
        MainComponent
    ],
    providers: [

    ]
})
export class MainModule { }
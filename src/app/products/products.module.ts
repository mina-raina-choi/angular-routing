import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// import { ProductComponent } from './product/product.component';
// import { MainComponent } from './main/main.component';
// import { MoreInfoComponent } from './more-info/more-info.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    // 여기를 lazy loading 시켜보자. 
    { path: 'main', loadChildren: './main/main.module#MainModule' },
    { path: 'more-info', loadChildren: './more-info/more-info.module#MoreInfoModule' },
    { path: ':id', loadChildren: './product/product.module#ProductModule' },
    // { path: 'main', component: MainComponent },
    // { path: 'more-info', component: MoreInfoComponent },
    // { path: ':id', component: ProductComponent },
  ];

@NgModule({
    declarations: [
        // ProductComponent,
        // MainComponent,
        // MoreInfoComponent
    ],
    exports: [
        // ProductComponent,
        // MainComponent,
        // MoreInfoComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ProductsModule { }
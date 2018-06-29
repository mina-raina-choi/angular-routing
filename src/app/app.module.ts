import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProtectedComponent } from './protected/protected.component';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { LoggedInGuard } from './logged-in.guard';
import { AUTH_PROVIDERS } from './auth.service';

import {  routes as childRoutes,
  ProductsModule } from './products/products.module'

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },

  // authentication demo
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuard]
  },

  // nested
  {
    path: 'products',
    component: ProductsComponent,
    children: childRoutes
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProductsComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // <-- routes
    FormsModule,
    HttpModule,
    ProductsModule
  ],
  providers: [
    // index.html에 <base href="/">와 같은 역할. index.html을 만질 수 없는 경우에 이런식으로 처리하면 됨
    {provide: APP_BASE_HREF, useValue: '/'},
    // 라우팅 기본규칙은 PathLocationStrategy : /home, /contact 같은 정규경로
    // HashLocationStrategy : /#/home, /#/contact
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
    LoggedInGuard,
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {  HttpClientModule} from "@angular/common/http";
import { ListProductsComponent } from './products/list-products/list-products.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { ProfileComponent } from './profile/profile.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    UserListComponent,
    LoginComponent,
    RegisterComponent,
    ListProductsComponent,
    ListOrdersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

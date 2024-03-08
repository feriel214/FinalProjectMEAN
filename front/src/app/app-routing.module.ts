import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'home',component:HomeComponent,
   children:[
    {path:'list/users' , component:UserListComponent},
    {path:'list/products' , component:ListProductsComponent},
    {path:'list/orders' , component:ListOrdersComponent},
    {path:'account',component:ProfileComponent}

   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

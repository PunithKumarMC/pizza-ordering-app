import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PizzaAuthGuard } from './pizza-auth.guard';
import { PizzaServiceComponent } from './pizza-service/pizza-service.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UpdatepizzaTocartComponent } from './updatepizza-tocart/updatepizza-tocart.component';
import { ViewcartComponent } from './viewcart/viewcart.component';

const routes: Routes = [
  {path:'', component:MainNavbarComponent},
  {path:'register', component:RegisterPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'pizza-service',component:PizzaServiceComponent,canActivate:[AuthGuard]},
  {path:'addtocart',component:UpdatepizzaTocartComponent},
  {path:'viewcart',component:ViewcartComponent},
  { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { FacLoginComponent } from './Faculty/fac-login/fac-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminInputComponent } from './admin/admin-input/admin-input.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { LogoutComponent } from './admin/logout/logout.component';
const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'signup',component:SignupComponent},
                        {path:'login',component:AdminLoginComponent},
                        {path:'faculty-login',component:FacLoginComponent},
                        {path:'admin-dashboard',component:AdminDashboardComponent},
                        {path:'admin-input',component:AdminInputComponent},
                       {path:'navbar',component:NavbarComponent},
                      {path:'logout',component:LogoutComponent}];
                        

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

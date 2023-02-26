import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { CarComponent } from './component/car/car.component';
import { PackagesComponent } from './component/packages/packages.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"",component:HomeComponent},
  {path:"car",component:CarComponent},
  {path:"packages",component:PackagesComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

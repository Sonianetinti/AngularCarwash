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
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { PackageComponent } from './component/package/package.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"",component:HomeComponent},
  {path:"car",component:CarComponent},
  {path:"userdetails",component:UserdetailsComponent},
  {path:"package",component:PackageComponent},
  {path:"packages",component:PackagesComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

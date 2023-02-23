import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarpackageComponent } from './component/carpackage/carpackage.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './component/home-page/home-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:"",component:HomePageComponent},
  {path:"dashboard",component:DashboardComponent},
  {path: 'carpackage',component:CarpackageComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarpackageComponent } from './component/carpackage/carpackage.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'carpackage',component:CarpackageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

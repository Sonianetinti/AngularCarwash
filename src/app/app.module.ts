import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CarpackageComponent } from './component/carpackage/carpackage.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { TokenInterceptor } from './interceptor/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CarpackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

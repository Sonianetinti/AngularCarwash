import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string="https://localhost:44308/api/User/"

  constructor(private http:HttpClient,private router:Router) { }

  register(userobj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userobj)
  }
  login(loginobj:any){
    return this.http.post<any>(`${this.baseUrl}Login`,loginobj)
  }
  LogOut(){
    localStorage.clear();
    // localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token')
  }
}

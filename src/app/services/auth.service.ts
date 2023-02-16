import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string="https://localhost:44308/api/User/"

  constructor(private http:HttpClient) { }

  register(userobj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userobj)
  }
  login(loginobj:any){
    return this.http.post<any>(`${this.baseUrl}Login`,loginobj)
  }
}

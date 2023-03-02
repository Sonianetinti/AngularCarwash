import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    readonly rootUrl = 'https://localhost:44308/api/Order/';
    constructor(private http: HttpClient) { }



}

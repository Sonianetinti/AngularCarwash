import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CardetailsService {

  
  readonly rootUrl = 'https://localhost:44308/api/Car/';
  constructor(private http: HttpClient) {}

  GetCarModels(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this.rootUrl);
  }
}

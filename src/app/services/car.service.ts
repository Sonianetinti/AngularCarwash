import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from '../models/car.model';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl='https://localhost:44308/api/Car/';
  constructor(private http:HttpClient) { }

  //get all cardetails
  getAllCars():Observable<CarModel[]>{
    return this.http.get<CarModel[]>(this.baseUrl);
  }

  addCar(ca:CarModel):Observable<CarModel>{
    ca.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<CarModel>(this.baseUrl,ca);
  }
}

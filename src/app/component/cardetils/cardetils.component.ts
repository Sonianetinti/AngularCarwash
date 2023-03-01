import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/models/car.model';
import { CardetailsService } from 'src/app/services/cardetails.service';

@Component({
  selector: 'app-cardetils',
  templateUrl: './cardetils.component.html',
  styleUrls: ['./cardetils.component.css']
})
export class CardetilsComponent {
  public cars:CarModel[] = [];

  carL: CarModel = {
    id:0,
    
    model:'',
    status:'',
  };

  constructor(
    private pack:CardetailsService ,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllCars();
    //console.log(this.drugs);
  }

  //set values to the drug
  SetPackageValues(Car: CarModel) {
    (this.carL.id = Car.id),
      (this.carL.model = Car.model),
      
      (this.carL.status = Car.status);
  }

  //Method to display all the drugs
  getAllCars() {
    this.pack.GetCarModels().subscribe((response) => {
      this.cars = response;
      //console.log(this.drugs);
    });
  }


  LogOut() {
    localStorage.removeItem('');
  }
}



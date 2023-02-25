import { Component ,OnInit} from '@angular/core';
import { CarModel } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:CarModel[]=[];
  ca:CarModel={
     id:'',
     model:'',
     status:''
  }
  constructor(private car:CarService){

  }
  ngOnInit(): void {
    this.getAllCars();
  }
  getAllCars(){
    this.car.getAllCars()
    .subscribe(
      Response=>{
        this.cars=Response;
        console.log(Response);

      }
    );
  }

  onSubmit(){
    this.car.addCar(this.ca)
     .subscribe(
      response=>{
        console.log(response);
      }
     )
  }
     
}

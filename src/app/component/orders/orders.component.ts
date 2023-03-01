import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/models/orders.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  public orders:OrderModel[] = [];

  orderL: OrderModel = {
    id:0,
    washingInstructions:'',
    date:'',
    status:'',
    packageName:'',
    description:'',
    price:0,
    city:'',
    pincode:0,
  };

  constructor(
    private order:OrdersService ,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllOrders();
    //console.log(this.drugs);
  }

  //set values to the drug
  SetPackageValues(order: OrderModel) {
    (this.orderL.id = order.id),
    (this.orderL.washingInstructions = order.washingInstructions),
    (this.orderL.date = order.date),
    (this.orderL.status = order.status),
    (this.orderL.packageName= order.packageName),
    (this.orderL.description= order.description),
    (this.orderL.price = order.price),
    (this.orderL.city = order.city),
    (this.orderL.pincode= order.pincode);

      
  }

  //Method to display all the drugs
  getAllOrders() {
    this.order.GetOrderModels().subscribe((response) => {
      this.orders = response;
      //console.log(this.drugs);
    });
  }


  LogOut() {
    localStorage.removeItem('');
  }
}



import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/models/orders.model';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent {
  public packages:OrderModel[] = [];

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
    private pack:OrderdetailsService ,
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
    this.pack.GetOrderModels().subscribe((response) => {
      this.packages = response;
      //console.log(this.drugs);
    });
  }

  //Method to add drug
  onSubmit() {
    console.log(this.orderL);
    this.pack.AddOrderModels(this.orderL).subscribe((Response) => {
      console.log(Response);
    });
    // this.toastr.success('Drug added');
    this.getAllOrders();

    //function to delay the code for 3 seconds to show the message
    // function delay(time: any) {
    //   return new Promise((resolve) => setTimeout(resolve, time));
    // }

    // delay(4000).then(() => console.log('ran after 1 second1 passed'));

    // location.reload();
  }

  

  LogOut() {
    localStorage.removeItem('');
  }
}



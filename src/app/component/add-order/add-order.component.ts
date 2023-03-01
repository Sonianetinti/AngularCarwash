import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderModel } from 'src/app/models/orders.model';
import { PackageModel } from 'src/app/models/packagedetails.model';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';
import { PackageService } from 'src/app/services/package.service';
import { ToastrService } from 'ngx-toastr';

interface Package {
  id: number,
  name: string,
  price: string;
  status: string;
}

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  public orders: OrderModel[] = [];
  public packages: OrderModel[] = [];
  id: any;

  public orderL: OrderModel = {
    id: 0,
    washingInstructions: '',
    date: '',
    status: 'Accepted',
    packageName: '',
    name: '',
    price: 0,
    city: '',
    pincode: 0,

  };

  public packL: PackageModel = {
    id: 0,
    name: '',
    price: '',
    status: 'Accepted',
  };

  constructor(
    private pack: OrderdetailsService,
    private router: Router,
    private route: ActivatedRoute,
    private Package: PackageService,
    private toastr: ToastrService
  ) {
    this.route.params.subscribe(params => {
      console.log('params', params)
      this.id = params['id']
    })
  }

  ngOnInit(): void {
    // this.getAllOrders();
    // //console.log(this.orders);

    // this.id = this.route.snapshot.params['id'];
    this.Package.getPackagebyId(this.id).subscribe( data => {

      // const { id, name, status, price} = data;
      console.log('ORDER',this.orderL)

      console.log('PACKAGE DATA', data)
      // this.packL=data;
      // this.packL.name = data['name'];

      this.orderL = {...this.orderL, ...data}

      // this.orderL.packageName = this.packL.name;
      // this.orderL.price = this.packL.price;
      // this.orderL.status = this.packL.status;

      console.log('ORDER', this.orderL)


    }, error => console.log(error));
  }

  //set values to the drug
  SetPackageValues(order: OrderModel) {
    (this.orderL.id = order.id),
      (this.orderL.washingInstructions = order.washingInstructions),
      (this.orderL.date = order.date),
      (this.orderL.status = order.status),
      (this.orderL.packageName = order.packageName),

      (this.orderL.price = order.price),
      (this.orderL.city = order.city),
      (this.orderL.pincode = order.pincode);
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
    console.log('SUBMIT',this.orderL);
    this.pack.AddOrderModels({...this.orderL, packageName: this.orderL.name}).subscribe((Response) => {
      console.log(Response);

      this.toastr.success('Order has been placed successfully', 'Ordered');
    });
    // this.toastr.success('Drug added');
    this.getAllOrders();


    
    window.location.href = '/orders';

    // alert('Order has been placed')



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

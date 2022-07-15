import { OrderService } from './../../services/order.service';

// import { PaymentMethodService } from './../../services/payment-method.service';
// import { AddressService } from './../../services/address.service';
// import { Component, OnInit } from '@angular/core';

import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

// import { UserService } from '../../services/user.service';
// import { OrderService } from '../../services/order.service';

// import { Router } from '@angular/router';
// import { AddressComponent } from '../address/address.component';
// import { MatDialog } from '@angular/material/dialog';
// import { StripeComponent } from '../stripe/stripe.component';
// import { ToastrService } from 'ngx-toastr';
// import Swal from 'sweetalert2';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderList: any = [];

  constructor(private orderService: OrderService, private router: Router) {

  }
  ngOnInit(): void {
    this.getAllOrder()
    // console.log("this.orderList", this.orderList)
  }
  getAllOrder() {

    this.orderService.getAllOrder().subscribe((data: any) => {
      console.log('orderList 23234', data.data)
      this.orderList = data.data;


    })
  }

  getOrderDetail(id: string){
    this.orderService.getOrderDetail(id).subscribe((data: any) => {
      console.log('orderDetail', data.data)
      // this.orderList = data.data;
      this.router.navigate(['/order-detail'],data._id)


    })
  }
}

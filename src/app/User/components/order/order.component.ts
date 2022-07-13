import { PaymentMethodService } from './../../services/payment-method.service';
import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { OrderService } from '../../services/order.service';

import { Router } from '@angular/router';
import { AddressComponent } from '../address/address.component';
import { MatDialog } from '@angular/material/dialog';
import { StripeComponent } from '../stripe/stripe.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  cartList: any[] = []
  userInfo: any
  userId: string = ''
  allAddress = []
  addressNew = []
  addressDefault :any
  paymentMethod: any
  success: boolean = false
  minimum: boolean = false;
  failure: boolean = false
  addressIsChoose = 0

  constructor(private addressService: AddressService,
    private router: Router,
    private dialog: MatDialog,
    // private checkout: CheckoutService,
    private userService: UserService,
    private orderService: OrderService,
    private paymentMethodService: PaymentMethodService) { }

  ngOnInit(): void {
    this.cartList = JSON.parse(localStorage.getItem("cartList"));

    this.getAllAddress()

  }
  getTotalPrice(): number {
    this.cartList = JSON.parse(localStorage.getItem("cartList"));
    let totalPrice = 0;
    this.cartList.forEach(item => {
      //kh ép kiểu dc
      totalPrice += +item.price * item.quantity;
      // + phía trước để ép kiểu string về number
      //  console.log("totalPrice",totalPrice);
    })

    return totalPrice;

  }
  // getInfoAddress() {
  //   this.userService.getUserInfo().subscribe((data: any) => {

  //     console.log('userid', data.data._id)

  //     this.userId = data.data._id
  //     setTimeout(() => {
  //       this.getAddressHere()
  //     }, 1000);

  //     console.log('userid 13214', this.userId)
  //     // console.log("23423578")
  //   })

  // }
  getUserInfo() {
    this.userService.getUserInfo().subscribe((data: any) => {
      // console.log('userInfo', data.data)
      this.userInfo = data.data

    })
  }
  getAllAddress() {
    this.addressService.getAddresses().subscribe((data: any) => {
      console.log('addresses 23234', data)
      this.allAddress = data.data
      this.addressDefault = data.data[0]
      this.getAddressHere()
      console.log('addresses 12425', this.allAddress)
      console.log(' this.addressDefault', this.addressDefault)

    })
  }
  openDialog() {
    let dialogRef = this.dialog.open(AddressComponent, {
      height: '740px',
      width: '500px',

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("result", result)
    })
  }
  openCheckout(){
   let dialogRef = this.dialog.open(StripeComponent, {
      height: '440px',
      width: '500px',

    });

    dialogRef.afterClosed().subscribe(result=>{
      console.log("result",result)
    })
  }
  openMedthod(){

  }

  changeAddressChosed(value: number){
    this.addressIsChoose = value
  }

  // changeAddress(idAddress: string){
  //  this.addressDefault = idAddress

  // }

  // changeAddress(idAddress: string,data: any) {
  //   console.log("idAddress", idAddress)
  //   console.log("all add", this.allAddress)
  //   let setDefault = this.allAddress.filter((item)=>{
  //     // console.log("item", item['_id'] === idAddress == true)
  //     return item['_id'] === idAddress
  //   })
  //   if(setDefault){
  //     setDefault[0].isDefault = true;

  //   }
  //   console.log(" setDefault[0]", setDefault[0])
  //   //   let setDefault['isDefault'] =true
  //   this.addressService.updateAddress(idAddress, setDefault[0]).subscribe((data : any)=> {
  //     console.log("data default", data)
  //   })
  //   // setDefault['isDefault'] === true
  //   // console.log("setDefault", setDefault)
  //   // this.addressService.updateAddress(idAddress, this.editUserForm.value).subscribe(data => {
  //   // })

  // }

  getAddressHere() {
    // this.isLoading = true
    console.log("this.allAddress", this.allAddress)
    console.log("this.addressNew", this.allAddress)
    console.log("this.userId", this.userId)

    // this.addressNew = this.allAddress.filter((id: any) => id.user === this.userId)
    // setTimeout(() => {
    //   this.addressDefault = this.allAddress.filter((item) => {
    //     // console.log("1234")
    //     // console.log("ien", item['isDefault'] ===true)

    //     return  item['isDefault'] === true

    //   })
    // }, 1000);
    this.addressService.getAddresses().subscribe((data: any) => {
      this.allAddress = data.data
    })


    // if (this.addressNew['isDefault'] === true){
    //   this.addressFirst
    // }
    // console.log(" this.addressNew", this.addressNew.isDefault === true)
    // this.addressFirst = this.addressNew['isDefault'] === true
    // console.log(" this.addressFirst", this.addressDefault)
    // this.addressService.getAddressDetail('62c01126977285dbb4cb1133').subscribe((data: any) => {
    //   console.log("133")
    //   console.log('userid addess', data.data)
    //   // this.userId = data.data._id

    // })
  }


  createOrder() {
    this.cartList = JSON.parse(localStorage.getItem("cartList"));
    this.paymentMethod = this.paymentMethodService.getPayment().subscribe((data) => { console.log("data", data) })
    console.log(" this.paymentMethod", this.paymentMethod)
    this.orderService.createOrder(this.cartList).subscribe({

      next: (data) => {
        // this.auth.setToken(data.data.accessToken);

      },
      error: (err) => {
        console.log('err', err);
      }
    }

    );
  }


}

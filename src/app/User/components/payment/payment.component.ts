import { PaymentMethodService } from './../../services/payment-method.service'
import { AddressService } from './../../services/address.service'
import { Component, OnInit } from '@angular/core'

import { UserService } from '../../services/user.service'
import { OrderService } from '../../services/order.service'

import { Router } from '@angular/router'
import { AddressComponent } from '../address/address.component'
import { MatDialog } from '@angular/material/dialog'
import { StripeComponent } from '../stripe/stripe.component'
import { ToastrService } from 'ngx-toastr'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  cartList: any[] = []
  userInfo: any
  userId: string = ''
  allAddress = []
  addressNew = []
  addressDefault: any
  paymentMethod: any
  success: boolean = false
  minimum: boolean = false
  failure: boolean = false
  addressIsChoose = 0
  cardIsChoose: number
  cardList = []
  receiptUrl: any
  isLoading: boolean = true
  isLoadingCard: boolean = true
  constructor(
    private addressService: AddressService,
    private router: Router,
    private dialog: MatDialog,
    // private checkout: CheckoutService,
    private userService: UserService,
    private orderService: OrderService,
    private paymentMethodService: PaymentMethodService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.cartList = JSON.parse(localStorage.getItem('cartList'))

    this.getAllAddress()
    this.getPaymentCard()
    this.addressService.getAddresses().subscribe((data: any) => {
      this.paymentMethodService.orderInfo.address = data.data[0]
    })
    // this.paymentMethod = this.paymentMethodService.orderInfo.paymentMethodId
  }

  getTotalPrice(): number {
    this.cartList = JSON.parse(localStorage.getItem('cartList'))
    let totalPrice = 0
    this.cartList.forEach((item) => {
      //kh ép kiểu dc
      totalPrice += +item.price * item.quantity
      // + phía trước để ép kiểu string về number
      //  console.log("totalPrice",totalPrice);
    })

    return totalPrice
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
    // this.isLoading = true;
    this.addressService.getAddresses().subscribe((data: any) => {
      console.log('addresses 23234', data)
      this.allAddress = data.data
      this.addressDefault = data.data[0]
      this.isLoading = false
      this.getAddressHere()
      // console.log('addresses 12425', this.allAddress)
      // console.log(' this.addressDefault', this.addressDefault)
    })
  }
  openDialog() {
    let dialogRef = this.dialog.open(AddressComponent, {
      height: '740px',
      width: '500px',
    })
    dialogRef.afterClosed().subscribe((result) => {
      // console.log("result", result)
      this.getAllAddress()
    })
  }
  checkout() {
    this.paymentMethodService.order().subscribe((data: any) => {
      // console.log("pay nè", data)
      this.receiptUrl = data.data.paymentDetails.charges.data[0].receipt_url
      window.open(`${this.receiptUrl}`, '_blank')
      setTimeout(() => {
        localStorage.removeItem('cartList')
        this.toastr.success('Checkout successfully', 'Success')
        this.router.navigate([''])
      }, 1000)
    })
  }

  openCheckout() {
    let dialogRef = this.dialog.open(StripeComponent, {
      height: '90%',
      width: '500px',
    })

    dialogRef.afterClosed().subscribe((result) => {
      // console.log("result", result)
      setTimeout(() => {
        localStorage.removeItem('cartList')
        this.toastr.success('Checkout successfully', 'Success')
        this.router.navigate([''])
      }, 2000)
    })
  }

  editInfo(id: string) {
    // console.log("id", id)
    let dialogRef = this.dialog.open(AddressComponent, {
      data: {
        id: id,
      },
      height: '740px',
      width: '500px',
    })
    dialogRef.afterClosed().subscribe((result) => {
      this.getAllAddress()
    })
  }

  openMedthod() {
    let dialogRef = this.dialog.open(StripeComponent, {
      height: '90%',
      width: '500px',
    })

    dialogRef.afterClosed().subscribe((result) => {
      // console.log("result", result)
     
      this.getPaymentCard()
    })
  }
  deleteAddress(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.addressService.deleteAddress(id).subscribe((res) => {
          this.getAllAddress()
        })
        Swal.fire('Deleted!', 'Your item has been deleted.', 'success')
      }
    })
  }
  deletePaymentCard(idCard: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.paymentMethodService.deleteCard(idCard).subscribe((item: any) => {
          this.getPaymentCard()
        })
        Swal.fire('Deleted!', 'Your item has been deleted.', 'success')
      }
    })
  }
  changeAddressChosed(idAddress: string, value: number) {
    this.addressIsChoose = value
    this.addressService.getAddressDetail(idAddress).subscribe((item) => {
      this.paymentMethodService.orderInfo.address = item.data
      // console.log("orderInfo", this.paymentMethodService.orderInfo)
    })
  }
  changeCardChosed(idCard: string, value: number) {
    this.cardIsChoose = value
    // this.addressService.getAddressDetail(idCard).subscribe((item)=>{

    this.paymentMethodService.orderInfo.paymentMethodId = idCard
    //   console.log("orderInfo", this.paymentMethodService.orderInfo)
    // })
  }

  // changeAddress(idAddress: string){
  //  this.addressDefault = idAddress

  // }

  changeAddress(idAddress: string, data: any) {
    // console.log("idAddress", idAddress)
    // console.log("all add", this.allAddress)
    let setDefault = this.allAddress.filter((item) => {
      // console.log("item", item['_id'] === idAddress == true)
      return item['_id'] === idAddress
    })
    if (setDefault) {
      setDefault[0].isDefault = true
    }
    // console.log(" setDefault[0]", setDefault[0])
    //   let setDefault['isDefault'] =true
    this.addressService
      .updateAddress(idAddress, setDefault[0])
      .subscribe((data: any) => {
        // console.log("data default", data)
      })
    // setDefault['isDefault'] === true
    // console.log("setDefault", setDefault)
    // this.addressService.updateAddress(idAddress, this.editUserForm.value).subscribe(data => {
    // })
  }

  getAddressHere() {
    this.addressService.getAddresses().subscribe((data: any) => {
      this.allAddress = data.data
    })
    // this.isLoading = true
    // console.log("this.allAddress", this.allAddress)
    // console.log("this.addressNew", this.allAddress)
    // console.log("this.userId", this.userId)

    // this.addressNew = this.allAddress.filter((id: any) => id.user === this.userId)
    // setTimeout(() => {
    //   this.addressDefault = this.allAddress.filter((item) => {
    //     // console.log("1234")
    //     // console.log("ien", item['isDefault'] ===true)

    //     return  item['isDefault'] === true

    //   })
    // }, 1000);

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

  getPaymentCard() {
    this.paymentMethodService.getPayment().subscribe((item) => {
      // console.log("item", item)
      this.cardList = item.data
    })
  }

  createOrder() {
    this.cartList = JSON.parse(localStorage.getItem('cartList'))
    this.paymentMethod = this.paymentMethodService
      .getPayment()
      .subscribe((data) => {
        console.log('data', data)
      })
    console.log(' this.paymentMethod', this.paymentMethod)
    this.orderService.createOrder(this.cartList).subscribe({
      next: (data) => {
        // this.auth.setToken(data.data.accessToken);
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }
  getOrer() {
    this.orderService.getAllOrder().subscribe((item: any) => {
      console.log('item', item)
    })
  }
}

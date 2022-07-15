import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StripeService, StripePaymentElementComponent } from 'ngx-stripe';
import {
  StripeElementsOptions,
  PaymentIntent
} from '@stripe/stripe-js';
import { EnviromentService } from 'src/app/enviroment.service';
import { PaymentMethodService } from '../../services/payment-method.service';
import { Router } from '@angular/router';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})



export class StripeComponent implements OnInit {
  @ViewChild(StripePaymentElementComponent)
  paymentElement: StripePaymentElementComponent;
  isLoading: boolean = true;
  receiptUrl: any
  ownerName:  string
  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  paying = false;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StripeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private stripeService: StripeService,
    private enviromentService: EnviromentService,
    private paymentMethodService: PaymentMethodService,
    private toastr: ToastrService,
    private addressService : AddressService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createPaymentIntent()
    // this.getItemCart()


  }
  pay() {
    this.stripeService.confirmSetup({
      elements: this.paymentElement.elements,
      confirmParams: {
        payment_method_data: {
          billing_details: {
            name: this.ownerName
          }
        },
        return_url: ''
      },
      redirect: 'if_required'
    }).subscribe((data: any) => { //get paymentMethodID here
      console.log("pay: ", data);
      this.paymentMethodService.orderInfo.paymentMethodId = data.setupIntent.payment_method;
      console.log('pm: ', data.setupIntent.payment_method)
      this.paymentMethodService.order().subscribe((data: any) => {
        console.log("data", data)
        this.receiptUrl = data.data.paymentDetails.charges.data[0].receipt_url

        window.open(`${this.receiptUrl}`, "_blank");
         setTimeout(() => {
        localStorage.removeItem('cartList')
        this.toastr.success('Checkout successfully', 'Success')

        this.router.navigate([''])
      }, 3000)
      })
      this.dialogRef.close()


      // this.addressService.getAddresses()
      // this.getItemCart()

      // this.paymentMethodService.order().subscribe((data: any) => {
      //   console.log("Order service: ", this.paymentMethodService.orderInfo);
      //   console.log("Order check: ", data);
      // })
    })
  }

  createPaymentIntent() {
    this.isLoading = true;

    this.paymentMethodService.createPayment().subscribe(pi => {
      // console.log("first", pi.data.client_secret);

      this.elementsOptions.clientSecret = pi.data.client_secret
      this.isLoading = false;
    })
    // console.log("this.isLoading", this.isLoading)
  }


  // getTokenSecret(){
  //   this.paymentMethodService.createPayment().subscribe((data)=>{
  //     console.log("first",data)
  //   })
  // }

}

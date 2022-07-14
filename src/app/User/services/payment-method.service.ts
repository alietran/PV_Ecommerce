import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EnviromentService } from 'src/app/enviroment.service';
import { HttpClient } from '@angular/common/http';
import { AddressService } from './address.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  public orderInfo: any = {}

  constructor(private enviromentService: EnviromentService, private http: HttpClient, private addressService: AddressService) { }
  getPayment(): Observable<any> {
    let user = this.enviromentService.url + "/users/me/payment-methods"
    return this.http.get(user).pipe(map(res => {
      // console.log("payment", res)
      return res;
    }))
  }

  createPayment(): Observable<any> {
    var api = this.enviromentService.url + '/users/me/payment-methods';

    return this.http.post<any>(api, {})

  }




  order() {

    let cartList2 = [];

    let cartList = JSON.parse(localStorage.getItem("cartList"));
    console.log("cartList", cartList)
    cartList.forEach(element => {
      let product: { productId: string, quantity: number } = { productId: '', quantity: 0 }
      product.productId = element._id
      product.quantity = element.quantity
      cartList2.push(product)
    });
    this.orderInfo.items = cartList2;
    console.log("cartList2", cartList2)

    console.log("orderInffo", this.orderInfo)
    console.log("this.orderInfo.address", this.orderInfo.address)
    console.log('payload: ',this.orderInfo)
    let api = this.enviromentService.url + "/orders"
    return this.http.post(api, this.orderInfo)
  }
}

import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EnviromentService } from 'src/app/enviroment.service';
import { Address } from '../Models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient, private enviromentService: EnviromentService, private userService: UserService) { }

  createAddress(address: any): Observable<Address> {
    var api = this.enviromentService.url + '/users/me/addresses';
    return this.http.post<Address>(api, address)

  }

  getAddresses(): Observable<any> {
    var addresses = this.enviromentService.url + '/users/me/addresses';
    return this.http.get<any>(addresses)
  }




  getAddressDetail(addressId: string): Observable<any> {
    // console.log("addressId", addressId)
    return this.http.get<any>(this.enviromentService.url + '/users/me/addresses/' + addressId)

  }
  getAddressUser(){
    const user = this.userService.getUserInfo().pipe(map(res => {
      console.log("user đây", res)
    }
    ))

  }
  //  editUser( id:number,data:any):Observable<any>{
  //   return this.http.put<any>(this.api+"/"+id,data)
  // }

  updateAddress(addressId: string, data: any): Observable<any>{
    let api = this.enviromentService.url + '/users/me/addresses/'+ addressId
    return this.http.put<any>(api,data)
  }

  deleteAddress(addressId: string): Observable<any> {
    let api = this.enviromentService.url + '/users/me/addresses/' + addressId
    return this.http.delete<any>(api)
  }
}


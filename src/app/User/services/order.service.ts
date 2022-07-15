import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnviromentService } from 'src/app/enviroment.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private enviromentService: EnviromentService, private http: HttpClient) { }
  createOrder(order: any): Observable<any> {
    let  api = this.enviromentService.url + '/orders';
    return this.http.post<any>(api, order)
  }

  getAllOrder(): Observable<any>{
    let api = this.enviromentService.url + '/orders?page=1&limit=10&sort[createdAt]=desc'
    return this.http.get<any>(api)
  }

  getOrderDetail(id: string) {
    let api = this.enviromentService.url + '/orders/' + id
    return this.http.get<any>(api)
  }

}

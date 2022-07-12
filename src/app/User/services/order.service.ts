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
    var api = this.enviromentService.url + '/orders';
    return this.http.post<any>(api, order)

  }

}

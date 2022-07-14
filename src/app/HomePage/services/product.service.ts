import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EnviromentService } from 'src/app/enviroment.service';
import { Product } from '../components/sale-product/sale-product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   laptop=this.enviromentService.url+"/products?page=1&limit=10&search=&sort[createdAt]=asc&where[category][$eq]=627931d711256e063d363c79";
  product=this.enviromentService.url+"/products?page=1&limit=10&search=&sort[createdAt]=asc";
  productDetail = this.enviromentService.url+"/products";
  constructor(private enviromentService: EnviromentService, private http: HttpClient) { }
    getAllLap ():Observable<any>{
    return this.http.get<any>(this.laptop).pipe(map(res => {
      //  console.log("re12s",res)
      return res;

    }))}

     getAllProduct ():Observable<any>{
    return this.http.get<any>(this.product).pipe(map(res => {
      //  console.log("req212s",res)
      return res;

    }))
  }

   getProductDetail(id:number):Observable<any>{
    return this.http.get<any>(this.productDetail+"/"+id)
  }
}

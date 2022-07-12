import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // const token = localStorage.getItem("token");
      // const headers  =  new HttpHeaders().set('token',token).set('Authorization','Bearer  '+token);
      // if(token){
      //     const authRequest = req.clone({headers: headers})
      //  return next.handle(authRequest)
      // }
          let header = new HttpHeaders();
    let token = localStorage.getItem('token');
    // header.append('Authorization', `Bearer ${token}`);
      // let token = localStorage.getItem("token");
      //  console.log("token nè" , typeof token)
      let token1 = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
      return next.handle(token1)
  }
}

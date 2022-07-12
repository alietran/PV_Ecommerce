import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EnviromentService } from 'src/app/enviroment.service';
import { User } from '../Models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 constructor(private enviromentService: EnviromentService, private http: HttpClient) { }


  getUserInfo(): Observable<any> {
    let user = this.enviromentService.url + "/users/me/profile"
    return this.http.get(user).pipe(map(res => {
      console.log("res", res)
      return res;
    }))
  }

}

import { Injectable } from '@angular/core';
import { EnviromentService } from 'src/app/enviroment.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private enviromentService: EnviromentService
  ) {}

  register(user) {
    var api = this.enviromentService.url + '/auth/register';
    return this.http.post<any>(api, user);
  }
  login(user) {
    let api = this.enviromentService.url + '/auth/login';
    let header = new HttpHeaders();
    var token = localStorage.getItem('token');
    header.append('Authorization', `Bearer ${token}`);
    return this.http.post<any>(api, user, { headers: header });
  }

}

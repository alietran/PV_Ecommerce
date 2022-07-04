import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {
  url = "https://phongvu-api.herokuapp.com/api/v1";
  constructor() { }
}

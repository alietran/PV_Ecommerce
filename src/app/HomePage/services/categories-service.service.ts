

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EnviromentService } from 'src/app/enviroment.service';

import { Category } from '../Model/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: Category[] = [];
  api=this.enviromentService.url+"/categories?page=1&limit=10&search&sort[name]=asc";
  constructor(private enviromentService: EnviromentService, private http: HttpClient) { }

  getAllCate ():Observable<any>{
    return this.http.get<any>(this.api).pipe(map(res => {
       console.log("res",res)
      return res;

    }))
  }
}

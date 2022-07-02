// import { ProductService } from './../../services/product.service';
import { CategoriesService } from './../../services/categories-service.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../Model/Category.model';
import { ProductService } from '../../services/product.service';
import { Product } from '../sale-product/sale-product.component';
import SwiperCore, { Pagination, Navigation } from 'swiper'

SwiperCore.use([Pagination, Navigation])
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  laptops: Product[]= [];

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
this.getAllCateLap();
  }
  getAllCateLap() {
    this.productService.getAllLap().subscribe((data: any) => {
      console.log('1224', data)
      this.laptops = data.data
    })
  }
}

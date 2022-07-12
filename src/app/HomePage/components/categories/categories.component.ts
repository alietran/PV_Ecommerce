// import { ProductService } from './../../services/product.service';
import { CategoriesService } from './../../services/categories-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../Model/Category.model';
import { ProductService } from '../../services/product.service';
import { Product } from '../sale-product/sale-product.component';
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { Router } from '@angular/router';

SwiperCore.use([Pagination, Navigation])
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  laptops: Product[] = [];
  isLoading: boolean = true;
  @Input() item: any
  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllCateLap();
  }
  getAllCateLap() {
    this.isLoading = true
    this.productService.getAllLap().subscribe((data: any) => {
      console.log('1224', data)
      this.laptops = data.data
      this.isLoading = false
    })
  }
  getDetail(id: number) {
    //  this.router.navigateByUrl(`/products/${id}`);

    this.router.navigate(['/products/', id]);
  }

}

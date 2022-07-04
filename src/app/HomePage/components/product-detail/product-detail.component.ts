import { Product } from './../../Model/Product.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: number = 0;
  index: number = 0;

  productDetail: Product = new Product();
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getInfoProduct()
  }
  getInfoProduct() {
    this.productService.getProductDetail(this.id).subscribe((data: any) => {
      this.productDetail = data.data
      console.log("data123", data)
    })
  }
  changeImage(label: number) {
    this.index = label;
  }
}

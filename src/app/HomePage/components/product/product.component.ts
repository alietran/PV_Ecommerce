import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../sale-product/sale-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  @Input() name: string = '';
  @Input() price: number = 500;
  @Input() image: string = '';
  @Input() sale: number = 20;
  page: number = 1;
  productItem = 10;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct() {
    this.productService.getAllProduct().subscribe((data: any) => {
      console.log('products', data.data)
      this.products = data.data
    })
  }
  getDetail(id: number){
    //  this.router.navigateByUrl(`/products/${id}`);

     this.router.navigate(['/products/',id]);
  }
}

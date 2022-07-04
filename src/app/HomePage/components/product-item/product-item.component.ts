import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../Model/Product.model';
import { ProductService } from '../../services/product.service';
interface LaptopProduct{
  name: string;
  price: number;
  image: string;

}
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit, OnChanges {

@Input()name: string = '';
@Input()price: number =500;
@Input()image: string='';
sale: number = 20;
@Input() item : any

  constructor(private productService:ProductService,private router: Router) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
      // console.log('dsg',this.name)
  }
 getDetail(id: number){
    //  this.router.navigateByUrl(`/products/${id}`);

     this.router.navigate(['/products/',id]);
  }
}

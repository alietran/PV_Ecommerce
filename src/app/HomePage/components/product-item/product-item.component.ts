import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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

  constructor(private productService:ProductService) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('dsg',this.name)
  }

}

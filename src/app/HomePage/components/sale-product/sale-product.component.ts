import { Component, IterableDiffers, OnInit, ViewChild } from '@angular/core'
import { ProductService } from '../../services/product.service'
import SwiperCore, { Pagination, Navigation } from 'swiper'

SwiperCore.use([Pagination, Navigation])

export interface Product {
  name: string
  price: number
  image: string
}
@Component({
  selector: 'app-sale-product',
  templateUrl: './sale-product.component.html',
  styleUrls: ['./sale-product.component.scss'],
})
export class SaleProductComponent implements OnInit {
  name: string = 'Gaming-Gear'
  products: Product[] = []
  days: number = 10
  hours: number = 6
  minutes: number = 46
  seconds: number = 10

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct()
    setInterval(()=>{
 this.coutDownTimer()
    },1000)

  }
  openTabs(name: any) {
    this.name = name
  }
  // getAllCateLap() {
  //   this.productService.getAllLap().subscribe((data: any) => {
  //     console.log('1224', data)
  //     this.laptops = data.data
  //   })
  // }
  getProduct() {
    this.productService.getAllProduct().subscribe((data: any) => {
      console.log('1224', data.data)
      this.products = data.data
    })
  }

  coutDownTimer(){
    var futureDate = new Date("July 15, 2022").getTime();
    var today = new Date().getTime();
    var distance = futureDate - today;
    this.days = Math.floor(distance / (1000 * 60 * 60 *24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
    this.seconds = Math.floor((distance % (1000 * 60 )) / (1000 ));
    if(distance < 0 ){
      clearInterval();
    }
    console.log("distance",distance);
  }
}

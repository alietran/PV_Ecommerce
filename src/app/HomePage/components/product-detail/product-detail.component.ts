import { Product } from './../../Model/Product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from '../../services/product.service';


// export interface ProductItem {
//   name: string
//   price: number
//   image: string
//   sku: number
//   quantity: number

// }
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: number = 0;
  index: number = 0;
  imageUrl: string;
  productDetail: Product = new Product();
  // productItem: ProductItem = new Product();
  cartList: any[] = []
  quantity: number = 1;
  isLoading: boolean = true;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    this.getInfoProduct()

  }
  getInfoProduct() {
    this.isLoading = true;
    this.route.params.subscribe((params: any) => {
      this.productService.getProductDetail(params.id).subscribe((data: any) => {
        this.productDetail = data.data;

        this.productDetail.galleries.length == 0 ? this.imageUrl = this.productDetail.image : this.imageUrl = this.productDetail.galleries[0].url;
        console.log('product: ', this.productDetail.galleries[0])
        this.isLoading = false
      })
    })
  }
  changeImage(label: string, i: number) {
    console.log('label: ', label)
    this.imageUrl = label;
    this.index = i;
  }

  addToCart() {
    if (!localStorage.getItem("cartList")) {
      localStorage.setItem('cartList', JSON.stringify(this.cartList))
    }
    this.cartList = JSON.parse(localStorage.getItem("cartList"));
    let _id = this.route.snapshot.params['id'];

    let productItem = { _id, name: this.productDetail.name, image: this.productDetail.image, price: this.productDetail.price, quantity: 1 }
    let indexGH = this.cartList.findIndex(spGiohnag => spGiohnag._id === productItem._id)
    //tìm thấy sp có trong giỏ hàng
    if (indexGH !== -1) {
      this.cartList[indexGH].quantity += 1;
    }
    //kh tìm thấy
    else {
      // this.cartList.push(productItem)
      this.cartList = [...this.cartList, productItem]
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
    }
    this.cartList = [...this.cartList]

    localStorage.setItem('cartList', JSON.stringify(this.cartList));
  }
}

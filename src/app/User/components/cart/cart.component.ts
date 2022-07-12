import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { CheckoutService } from '../../services/checkout.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList: any[] = []
  success: boolean = false
  minimum: boolean = false;
  failure: boolean = false

  isLoading: boolean;
  constructor(private router: Router) { }
  // private checkout: CheckoutService,
  handler: any = null;
  ngOnInit(): void {
    this.getCartList()
    console.log('cartList', this.cartList)

  }
  getCartList() {
    // this.isLoading = false;
    this.cartList = JSON.parse(localStorage.getItem("cartList"));
  }
  getTotalPrice(): number {
    this.cartList = JSON.parse(localStorage.getItem("cartList"));
    let totalPrice = 0;
    this.cartList.forEach(item => {
      //kh ép kiểu dc
      totalPrice += +item.price * item.quantity;
      // + phía trước để ép kiểu string về number
      //  console.log("totalPrice",totalPrice);
    })

    return totalPrice;

  }
  removeItemFromCart(id: number) {
    // console.log("id", id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this item!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your item has been deleted.',
          'success'
        )
        let removeItem = JSON.parse(localStorage.getItem('cartList'));
        this.cartList = removeItem.filter((item: any) => {
          // console.log("item.id", item._id)
          // console.log("id", id)

          return item._id !== id
        })

        localStorage.setItem('cartList', JSON.stringify(this.cartList));
      }
    })


  }



  deCrease(pro: any) {
    // console.log(pro._id)
    // console.log("init", this.cartList)
    let cartList2 = [...this.cartList];
    // console.log("first", cartList2)
    // console.log("qwew", this.cartList)
    for (let i = 0; i < this.cartList.length; i++) {
      if (cartList2[i]._id == pro._id) {
        if (cartList2[i].quantity == 1) {
          this.minimum = true;
          alert("The product has reached the minimum quantity")
        }
        else {
          cartList2[i].quantity = cartList2[i].quantity - 1;
          localStorage.setItem("cartList", JSON.stringify(cartList2))
          // console.log("cartList2if", cartList2, i)
          this.cartList = [...cartList2];
        }


      }
    }
    // console.log("this.cartList", this.cartList);
  }
  inCrease(pro: any) {
    let cartList2 = [...this.cartList];

    for (let i = 0; i < this.cartList.length; i++) {
      if (cartList2[i]._id == pro._id) {

        cartList2[i].quantity = cartList2[i].quantity + 1;
        localStorage.setItem("cartList", JSON.stringify(cartList2))

        this.cartList = [...cartList2];
      }


    }
  }


}

import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/User/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  token: string = localStorage.getItem("token");
  cartList: any
  isHasItemCart: boolean = false
  quantityItemCart : number = 0
  userInfo: string = ''
  constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {
    console.log('token', this.isHasItemCart)
    this.getUserInfo();
    this.getItemCart();

    console.log('cartList', this.cartList)
  }

  ngDoCheck() {

    //disable this line to see the counter not moving
    this.getItemCart();


  }

  getUserInfo() {
    console.log('199898')
    this.userService.getUserInfo().subscribe((data: any) => {
      console.log('header', data.data)
      this.userInfo = data.data

    })
  }
  getItemCart() {

    this.cartList = JSON.parse(localStorage.getItem("cartList"));
    if (this.cartList) { this.isHasItemCart = true }
    console.log("this.isHasItemCart", this.isHasItemCart)
    console.log("this.isHasItemCart", this.cartList)

  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigate([''])
    setTimeout(() => {
      window.location.reload();
    }, 500);


  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/User/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token : string = localStorage.getItem("token");
  cartList :any
  isHasItemCart: boolean = false
  userInfo: string = ''
  constructor(private userService : UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.getItemCart();
    console.log('token',this.token)
    console.log('cartList', this.cartList)
  }
  getUserInfo() {
    console.log('199898')
    this.userService.getUserInfo().subscribe((data: any) => {
      console.log('header', data.data)
      this.userInfo = data.data

    })
  }
  getItemCart(){

    this.cartList = JSON.parse(localStorage.getItem("cartList"));
    if (this.cartList !== '') this.isHasItemCart =true
    console.log("this.isHasItemCart", this.isHasItemCart)
    console.log("this.isHasItemCart", this.cartList)
  }
  logout(){
    localStorage.removeItem("token");
    this.router.navigate([''])
    setTimeout(() => {
      window.location.reload();
    }, 500);


  }
}

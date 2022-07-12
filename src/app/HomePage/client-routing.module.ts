import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
// import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from '../User/components/Auth/register/register.component';
import { LoginComponent } from '../User/components/Auth/login/login.component';
import { UserComponent } from '../User/user.component';
import { OrderComponent } from '../User/components/order/order.component';
import { CartComponent } from '../User/components/cart/cart.component';
import { AddressComponent } from '../User/components/address/address.component';
import { UserInfoComponent } from '../User/components/user-info/user-info.component';
import { StripeComponent } from '../User/components/stripe/stripe.component';
// import { StripeComponent } from '../User/components/stripe/stripe.component';




const clientRoutes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [

      {
        path: '', component: LandingPageComponent,
      },
      { path: 'products/:id', component: ProductDetailComponent},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
      { path: 'address', component: AddressComponent, canActivate: [AuthGuard] },
      { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
      { path: 'userInfo', component: UserInfoComponent, canActivate: [AuthGuard] },
      { path: 'stripe', component: StripeComponent, canActivate: [AuthGuard] },


    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(clientRoutes),],
  exports: [RouterModule],
})
export class ClientRoutingModule { }

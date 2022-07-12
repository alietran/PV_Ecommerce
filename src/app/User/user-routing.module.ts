import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Auth/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './user.component';

const childrenRoutes: Routes = [
  { path: '',
    component: UserComponent,
    children: [
      {
        path: '', component: LoginComponent,
      },
      {
        path: 'cart', component: CartComponent,
      }
    ]
  }
    // //    {
    //     path: 'register', component: RegisterComponent,
    //   },
    //   {
    //     path: 'login', component: LoginComponent,
    //   },
];

@NgModule({
  imports: [RouterModule.forChild(childrenRoutes),],
  exports: [RouterModule],
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './components/Auth/auth.module';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './user.component';




@NgModule({
  declarations: [
   OrderComponent,
   UserComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
  ]
})
export class UserModule { }

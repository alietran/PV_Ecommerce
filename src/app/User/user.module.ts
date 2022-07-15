import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './components/Auth/auth.module';
// import { OrderComponent } from './components/order/order.component';
// import { UserComponent } from './user.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/Auth/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { AddressComponent } from './components/address/address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserInfoComponent } from './components/user-info/user-info.component';
import { NgxStripeModule } from 'ngx-stripe';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { StripeService } from './User/services/stripe.service';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StripeComponent } from './components/stripe/stripe.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { StripeService } from 'ngx-stripe';
// import { Stripe;Service } from './services/stripe.service'
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.moulde';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

// import { LoaddingComponent } from '../shared/loadding/loadding.component';
// import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    // OrderComponent,
    CartComponent,
    AddressComponent,
    UserInfoComponent,
    StripeComponent,
    PaymentComponent,
    OrderComponent,
    OrderDetailComponent
  ],
  imports: [
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    MatDialogModule,
    AuthModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    UserRoutingModule,
    MatRadioModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    NgxStripeModule,
    SharedModule,
  ],

  exports: [],
})
export class UserModule {}

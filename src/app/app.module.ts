import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ClientComponent } from './HomePage/client.component';
import { ClientRoutingModule } from './HomePage/client-routing.module';
import { ClientModule } from './HomePage/client.module';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRoutingModule } from './User/user-routing.module';
// import { UserComponent } from './User/user.component';
// import { LoaddingComponent } from './shared/loadding/loadding.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { StripeService } from 'ngx-stripe';
import { NgxStripeModule } from 'ngx-stripe';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientComponent,
    // UserComponent,
    // LoaddingComponent

  ],

  imports: [BrowserModule,  HttpClientModule, AppRoutingModule, ClientRoutingModule,MatFormFieldModule,MatInputModule,
    ClientModule, SwiperModule, UserRoutingModule, BrowserAnimationsModule, MatProgressSpinnerModule,MatDatepickerModule,
    MatDialogModule, ToastrModule.forRoot({
      timeOut: 1000,
      progressBar:true,
    }),
    NgxStripeModule.forRoot('pk_test_51KxEc0JsyzcmxeMthvDJvy8lLHbDXIU3uggTgPC4oXvUDwL1DNt7srJwYKzzJyG7NLDv9MjprFy7DZPgoHxieMaS00tFsI8FNI'),

  ], //, ClientModule
  bootstrap: [AppComponent],
})
export class AppModule { }

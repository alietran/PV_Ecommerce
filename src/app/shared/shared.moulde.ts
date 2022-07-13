import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgxStripeModule } from 'ngx-stripe';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { StripeService } from './User/services/stripe.service';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { StripeService } from 'ngx-stripe';
// import { Stripe;Service } from './services/stripe.service'
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaddingComponent } from './loadding/loadding.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [

    LoaddingComponent

  ],
  imports: [
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule, BrowserModule,
    CommonModule, FormsModule,
    HttpClientModule, MatProgressSpinnerModule, MatButtonModule
  ],

  exports: [LoaddingComponent]
})
export class SharedModule { }

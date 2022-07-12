
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClientComponent } from './client.component';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SaleProductComponent } from './components/sale-product/sale-product.component';
import { SwiperModule } from 'swiper/angular';
import { BannerComponent } from './components/banner/banner.component';
import { TruncatePipe } from '../Pipe/truncate.pipe';
import { DeviceComponent } from './components/device/device.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';


import { RouterModule } from '@angular/router';
import { AuthService } from '../User/services/auth.service';
import { AuthModule } from '../User/components/Auth/auth.module';
import { UserModule } from '../User/user.module';
import { UserRoutingModule } from '../User/user-routing.module';
import { ClientRoutingModule } from './client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LoaddingComponent } from '../shared/loadding/loadding.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TokenInterceptorService } from '../User/services/token-interceptor.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    PromotionComponent,
    LandingPageComponent,
    SubMenuComponent,
    SidebarComponent,
    CategoriesComponent,
    ProductItemComponent,
    SaleProductComponent,
    BannerComponent,
    TruncatePipe,
    DeviceComponent,
    ProductComponent,
    ProductDetailComponent,
    // LoaddingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SwiperModule,
    NgxPaginationModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    MatProgressSpinnerModule,MatFormFieldModule,MatNativeDateModule,MatDatepickerModule,

  ],
  providers: [AuthService,
   {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true
    }
],
  bootstrap: [ClientComponent],
  exports: [
    PromotionComponent,
    LandingPageComponent,
    SidebarComponent,
    CategoriesComponent,
    // LoaddingComponent
  ],
})
export class ClientModule { }

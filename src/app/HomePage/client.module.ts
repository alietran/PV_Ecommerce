import { HttpClientModule } from '@angular/common/http';
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
ProductComponent
  ],
  imports: [BrowserModule,HttpClientModule,SwiperModule],
  providers: [],
  bootstrap: [ClientComponent],
  exports: [PromotionComponent, LandingPageComponent, SidebarComponent,CategoriesComponent]
})
export class ClientModule {}

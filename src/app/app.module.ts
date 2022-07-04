import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminTemplateComponent } from './Admin/components/admin-template/admin-template.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

import { FooterComponent } from './shared/footer/footer.component';
// import { PromotionComponent } from './HomePage/components/promotion/promotion.component';

// import { CategoryModule } from './HomePage/components/category/category.module';
// import { ProductCategoryComponent } from './HomePage/components/product-category/product-category.component';
import { AdminComponent } from './Admin/admin.component';
import { ClientComponent } from './HomePage/client.component';
import { ClientRoutingModule } from './HomePage/client-routing.module';
import { AdminRoutingModule } from './Admin/admin-routing.module';
import { AdminModule } from './Admin/admin.module';
import { ClientModule } from './HomePage/client.module';
// import { ClientModule } from './HomePage/client.module';
import { SwiperModule } from 'swiper/angular';
import { TruncatePipe } from './Pipe/truncate.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    ClientComponent,
    
  ],

  imports: [BrowserModule, AppRoutingModule, ClientRoutingModule, AdminRoutingModule, AdminModule,ClientModule,SwiperModule ], //, ClientModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

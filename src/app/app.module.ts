import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AdminTemplateComponent } from './Admin/components/admin-template/admin-template.component';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './shared/header/header.component';
import { LandingPageComponent } from './HomePage/components/landing-page/landing-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PromotionComponent } from './HomePage/components/promotion/promotion.component';




@NgModule({
  declarations: [AppComponent, AdminTemplateComponent, HeaderComponent, LandingPageComponent, FooterComponent, PromotionComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

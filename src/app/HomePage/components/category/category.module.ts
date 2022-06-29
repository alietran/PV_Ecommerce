import { SubMenuComponent } from './../sub-menu/sub-menu.component';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CategoryComponent } from './category.component'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ CategoryComponent,SubMenuComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  exports:[CategoryComponent,SubMenuComponent]
})
export class CategoryModule {}

import { Component, OnInit } from '@angular/core';
import { Category } from '../../Model/Category.model';
import { CategoriesService } from '../../services/categories-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 categories : Category[] = []
  index : string = '';
  hideItem : boolean = false;
  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    console.log("catories",this.categories)
    this.getAllCateMenu()
  }
  getAllCateMenu(){
this.categoryService.getAllCate().subscribe((data:any)=>{
      this.categories = data.data;

     });
  }
  showSubMenu(item:string){

    console.log("item", item)
    this.index = item;
    this.hideItem = true;
  }

}

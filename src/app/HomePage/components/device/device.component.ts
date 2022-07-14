import { Component, OnInit } from '@angular/core';
import { Category } from '../../Model/Category.model';
import { CategoriesService } from '../../services/categories-service.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  category:  Category[]= [];
  constructor(private categoryService:CategoriesService) { }

  ngOnInit(): void {
    this.getAllCate();
  }
  getAllCate(){
      this.categoryService.getAllCate().subscribe((data: any) => {
      // console.log('category', data.data)
      this.category = data.data
    })
  }

}

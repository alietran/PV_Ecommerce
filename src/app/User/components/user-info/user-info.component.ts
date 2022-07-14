import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/User.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  userInfo: User;
  gender: string = 'female';
  userInfoForm = new FormGroup<any>({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
  });
  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUserInfo()
    console.log("userInfoForm",this.userInfoForm)
  }
  getUserInfo() {
    this.userService.getUserInfo().subscribe((data: any) => {
      // console.log('userInfo', data.data)
      this.userInfo = data.data
      this.gender = data.data.gender
      // console.log('userInfo 1224', data.data)
      this.userInfoForm = new FormGroup({
        firstName: new FormControl(data.data.firstName),
        lastName: new FormControl(data.data.lastName),
        email: new FormControl(data.data.email),
        phone: new FormControl(data.data.phone),
        dob: new FormControl(formatDate(data.data.dob, 'yyyy-MM-dd', 'en')),
        gender: new FormControl(data.data.gender),
      });
    })}

  updateUserInfo(){
    this.userService.updateUserInfo(this.userInfoForm.value).subscribe((item)=>{
      // console.log("item info", item)
    })
    this.toastr.success('Update user info successfully', 'Success')
  }
}

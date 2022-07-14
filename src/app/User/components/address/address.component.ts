import { AddressService } from './../../services/address.service';
import { Component, Inject, OnInit, DoCheck } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  idAddress: string


  addressForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    email: new FormControl('',),
    district: new FormControl('', Validators.required),
    ward: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });
  constructor(private addressService: AddressService, public dialogRef: MatDialogRef<AddressComponent>,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) private data: { id: string }) { }

  ngOnInit(): void {
    // console.log('this.addressForm', this.addressForm);
    this.getUserAddress()
    this.idAddress = this.data.id
  }


  createAddress() {
    this.addressService.createAddress(this.addressForm.value).subscribe((data: any) => {
      console.log('data address', data)
      this.addressForm.reset()

      this.dialogRef.close()
      this.toastr.success('Checkout successfully', 'Success')
    })

  }
  updateAddress() {
    this.addressService.updateAddress(this.data.id, this.addressForm.value).subscribe((data) => {
      console.log("data", data)
      this.getUserAddress()
      this.dialogRef.close()
    })
  }
  getUserAddress() {
    this.addressService.getAddressDetail(this.data.id).subscribe((item) => {
      console.log("item", item)
      this.addressForm = new FormGroup({
        fullName: new FormControl(item.data.fullName),
        city: new FormControl(item.data.city),
        email: new FormControl(item.data.email),
        district: new FormControl(item.data.district),
        ward: new FormControl(item.data.ward),
        phone: new FormControl(item.data.phone),
        address: new FormControl(item.data.address),
      })
    })
  }


}



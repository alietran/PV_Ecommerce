import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {



  addressForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    email: new FormControl('', ),
    district: new FormControl('', Validators.required),
    wards: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });
  constructor(private addressService: AddressService, public dialogRef: MatDialogRef<AddressComponent>,
    ) { }

  ngOnInit(): void {
    console.log('this.addressForm', this.addressForm);
  }
  createAddress() {
    this.addressService.createAddress(this.addressForm.value).subscribe((data: any) => {
      console.log('data address', data)
      this.addressForm.reset()
      this.dialogRef.close()
    })

  }
}



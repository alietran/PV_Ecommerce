import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/User/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  today: Date;

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    dob: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
  });
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    // console.log('this.registerForm', this.registerForm);
  }
  register() {
    this.auth.register(this.registerForm.value).subscribe((res) => {
      this.registerForm.reset();
      this.router.navigate(['login'])
      // console.log(res);
    }, err => {
      console.log('err', err)
    }
    );
  }
}

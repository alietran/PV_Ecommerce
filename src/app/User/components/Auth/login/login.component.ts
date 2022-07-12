import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/User/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void { }
  login() {
    this.auth.login(this.loginForm.value).subscribe({
      next: (data) => {
        // this.auth.setToken(data.data.accessToken);
        localStorage.setItem('token', data.data.accessToken);
        this.router.navigate([''])
        setTimeout(() => {
          window.location.reload();
        }, 500);
      },
      error: (err) => {
        console.log('err', err);
      }
    }

    );
  }
}

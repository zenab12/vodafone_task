import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
//  styleUrls: ['./login.css'],


})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  flag = false;
  loginResult: any = {};
  isShow: any = false;
  errMessage:string = '';

  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[a-z0-9]+$'),
          Validators.maxLength(20),
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

// toggle show or hide password
  togglePassword() {
    this.isShow = !this.isShow;
  }
  setType() {
    return this.isShow ? 'text' : 'password';
  }

  onSubmit() {
    this.flag = true;
    if (this.loginForm.valid) {
      this.loginResult = {
        username: this.username?.value,
        password: this.password?.value,
      };
      if (
        this.loginResult.username == 'user' &&
        this.loginResult.password == 'user'
      ) {
        this.router.navigateByUrl('/user');
        localStorage.setItem('token', 'user')
      }else if(this.loginResult.username == 'admin' && this.loginResult.password=='admin' )
      {
        this.router.navigateByUrl('/admin');
        localStorage.setItem('token', 'admin')

      }else
      {
      this.errMessage = 'invalid username or password'
      }
      this.flag = false;
    } else {
      this.loginForm.markAllAsTouched();
      for (const key of Object.keys(this.loginForm.controls)) {
        if (this.loginForm.controls[key].value.length === 0) {
          this.loginForm.controls[key].markAsDirty();
        }
      }
      setTimeout(() => {
        this.flag = false;
      }, 500);
    }
  }
}

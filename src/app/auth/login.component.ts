import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  template: `
    <div class="page page_login">
      <h1>用户登陆</h1>
      <form [formGroup]="form" (ngSubmit)="doLogin()" novalidate>
        <div class="form-group">
          <label class="control-label">用户名：</label>
          <input required formControlName="userName" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label class="control-label">密码：</label>
          <input required formControlName="password" type="password" class="form-control" />
        </div>
        <div class="btn-group">
          <button [disabled]="form.invalid" type="submit" class="btn-success">登陆</button>
          <button type="reset" class="btn-danger">重填</button>
        </div>
      </form>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authService: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])]
    });
  }

  doLogin(): void {
    if (this.form.value) {
      this._authService
        .login(this.form.value)
        .subscribe((res: string | null) => {
          if (res) {
            this.router.navigateByUrl('/home');
          } else {
            alert('用户名或密码错误,请重新登陆');
          }
        });
    }
  }

}

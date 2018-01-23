import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login.component';
import { AuthErrorComponent } from './auth-error.component';
import { Page404Component } from './page-404.component';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
    AuthErrorComponent,
    Page404Component,
  ],
  providers: [AuthService]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthErrorComponent } from './auth-error.component';
import { Page404Component } from './page-404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'auth-error', component: AuthErrorComponent },
  { path: 'page-404', component: Page404Component },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

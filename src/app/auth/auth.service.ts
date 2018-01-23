import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private token = 'token';
  private state = 0;

  constructor() {}

  login({userName, password}): Observable<string> {
    if (userName === 'chenlv' && password === 'zxcv123') {
      this.state = 1;
      sessionStorage.setItem('token', this.token);
      return Observable.of(this.token);
    } else {
      if (sessionStorage.getItem('token')) {
        sessionStorage.removeItem('token');
      }
      return Observable.of(null);
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

export interface User {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http
      .post('http://localhost:3000/auth/register', user, {responseType: 'text'})
      .pipe(tap(jwt => alert(jwt)));
  }

  login(user: User) {
    return this.http
      .post('http://localhost:3000/auth/login', user, {responseType: 'text'})
      .pipe(tap(jwt => alert(jwt)));
  }

  logout() {
    sessionStorage.removeItem('user');
  }
}

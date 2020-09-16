import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    this.http
      .post('http://localhost:3000/auth/register', user, {responseType: 'text'})
      .subscribe();
  }

  login(user: User) {
    this.http
      .post('http://localhost:3000/auth/login', user, {responseType: 'text'})
      .subscribe();
  }

  logout() {
    sessionStorage.removeItem('user');
  }
}

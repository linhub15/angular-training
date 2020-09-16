import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    // POST http://localhost:3000/auth/login
    const login = {
      email: email,
      password: password
    };
    // POST is a short-lived observable
    this.http
      .post(
        'http://localhost:3000/auth/login',
        login,
        {responseType: 'text'})
      .subscribe();
  }
}

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
  
  login(user: User) {
    console.log(user);
    this.http
      .post('http://localhost:3000/auth/login', user, {responseType: 'text'})
      .subscribe((jwt) => {
        alert(jwt);
      });
  }
}
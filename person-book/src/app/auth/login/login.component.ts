import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    this.auth.login(loginForm.value as User);
  }

  logout() {
    // this.auth.logout();
  }
}

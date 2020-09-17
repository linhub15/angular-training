import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(form: NgForm) {
    const register = form.value;
    // Confirm email exists (email is required)
    if (!register.email) { // falsey
      alert('email is required');
    }
   
    // Confirm Passwords match
    if (register.password === register.confirmPassword) {
      const user = {
        email: register.email,
        password: register.password
      };
      this.authService.register(user);
    } else {
      alert(`passwords don't match`);
    }
  }
}

import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [AuthService],
  imports: [FormsModule, HttpClientModule],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
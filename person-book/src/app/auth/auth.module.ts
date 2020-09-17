import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [],
  imports: [FormsModule],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
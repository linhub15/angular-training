import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddPersonComponent } from './directory/add-person/add-person.component';
import { DirectoryComponent } from './directory/directory.component';

const routes: Routes = [
  { path: '', redirectTo: 'directory', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'add-person', component: AddPersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

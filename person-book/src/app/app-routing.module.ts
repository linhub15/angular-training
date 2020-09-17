import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddPersonComponent } from './directory/add-person/add-person.component';
import { DirectoryComponent } from './directory/directory.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent }, // ctrl + space
  { path: 'register', component: RegisterComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'add-person', component: AddPersonComponent },
  // { path: 'person/add', component: AddPersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

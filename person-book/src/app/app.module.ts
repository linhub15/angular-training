import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// day-2
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Feature Modules
import { AuthModule } from './auth/auth.module';
import { DirectoryComponent } from './directory/directory.component';
import { AddPersonComponent } from './directory/add-person/add-person.component';
import { HttpJwtInterceptor } from './core/http-jwt.interceptor';
import { PhonePipe } from './core/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    AddPersonComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpJwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

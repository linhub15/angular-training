import { Injectable } from '@angular/core';
import { Person } from './person.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople$() {
    return this.http.get<Person[]>('http://localhost:3000/people');
  }

  addPerson(person: Person) {
    this.http
      .post('http://localhost:3000/people', person, {responseType: 'text'})
      .subscribe();
    // {{ people$ | async }}
  }
}

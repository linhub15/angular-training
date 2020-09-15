import { Injectable } from '@angular/core';
import { Person } from './person.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople$() {
    return this.http.get('http://localhost:3000/people');
    // TODO(day-2): call web service
  }

  addPerson(person: Person) {
    // TODO(day-2): post request
  }
}

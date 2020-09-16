import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { PeopleService } from './people.service';
import { Person } from './person.model';

describe('PeopleService', () => {
  let service: PeopleService;
  let http: HttpTestingController; // <--

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PeopleService);
    http = TestBed.inject(HttpTestingController); // <---
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //function(a, b) {}
  //(a, b) => {} // arrow function
  describe('getPeople$', () => {
    it('should return an Observable array of Person[]', () => {
      // setup test data
      const apiResponse: Person[] = [
        { 
          firstName: 'test',
          lastName: 'test',
          email: 'test@test.com',
          phone: 7801234567
        }];

      // call the method
      service.getPeople$().subscribe(people => {
        expect(people.length).toEqual(1);
      });

      // Use HttpClientTestingModule to capture fake webrequest
      const request = http.expectOne('http://localhost:3000/people');
      expect(request.request.method).toBe('GET');
      request.flush(apiResponse);
    });
  });
});

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';

describe('PeopleService', () => {
  let http: HttpClient;
  let httpController: HttpTestingController;
  let service: PeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PeopleService]
    });
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

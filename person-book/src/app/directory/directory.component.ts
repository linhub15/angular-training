import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleService } from '../core/http/people/people.service';
import { Person } from '../core/http/people/person.model';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  people$: Observable<Person[]>;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople$();
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PeopleService } from '../core/http/people/people.service';
import { Person } from '../core/http/people/person.model';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  people$: Observable<Person[]>; // ctrl + .
  subscription: Subscription;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.people$ = this.peopleService.getPeople$();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

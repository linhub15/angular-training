import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../core/http/people/people.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {}

  getPeople$() {
    return this.peopleService.getPeople$();
  }
}

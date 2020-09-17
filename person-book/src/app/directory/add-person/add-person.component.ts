import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PeopleService } from 'src/app/core/http/people/people.service';
import { Person } from 'src/app/core/http/people/person.model';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {

  constructor(
    private peopleService: PeopleService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addPerson(form: NgForm) {
    this.peopleService
      .addPerson(form.value as Person)
      .subscribe(() => {
        this.router.navigate(['directory']);
      });
  }
}

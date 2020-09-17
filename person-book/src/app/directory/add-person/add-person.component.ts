import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PeopleService } from 'src/app/core/http/people/people.service';
import { Person } from 'src/app/core/http/people/person.model';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
  personForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl()
  });
  // TODO(day-3): Add validation

  // Getter
  get firstName() {
    return this.personForm.get('firstName');
  }

  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  addPerson() {
    const person = this.personForm.value as Person;

    this.peopleService.addPerson(person)
      .subscribe(() => {this.router.navigate(['directory'])});
  }
}

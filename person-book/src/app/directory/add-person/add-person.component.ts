import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PeopleService } from 'src/app/core/http/people/people.service';
import { Person } from 'src/app/core/http/people/person.model';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
  // TODO(day-3): Use reactive forms
  personForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl()
  });
  // TODO(day-3): Add validation
  
  constructor(private peopleService: PeopleService) { }
  
  ngOnInit(): void { }

  addPerson() {
    const person = this.personForm.value as Person;

    this.peopleService.addPerson(person);
  }
}

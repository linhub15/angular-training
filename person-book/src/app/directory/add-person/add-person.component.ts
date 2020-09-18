import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
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
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('', this.phoneValidator())
  });
  // TODO(day-3): Add validation

  // Getter
  get firstName() {
    return this.personForm.get('firstName');
  }

  get lastName() {
    return this.personForm.get('lastName');
  }

  get email() {
    return this.personForm.get('email');
  }

  get phone() {
    return this.personForm.get('phone');
  }  

  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  addPerson() {
    this.personForm.markAllAsTouched();

    if (this.personForm.invalid) {
      // alert('form is invalid');
      return;
    }

    const person = this.personForm.value as Person;

    this.peopleService.addPerson(person)
      .subscribe(() => {this.router.navigate(['directory'])});
  }

  // (): string | number => {}
  phoneValidator(): ValidatorFn {
    return (control: FormControl): ValidationErrors | null => {
      const phonePattern = new RegExp(/^\(\d{3}\)\ ?\d{3}\-\d{4}\d?$|^\d{10}$|^$/);
      const valid = phonePattern.test(control.value);
      //return !valid ? { 'phone': true } : null;
      return valid ? null : { 'phone': true };
    }
  }
}

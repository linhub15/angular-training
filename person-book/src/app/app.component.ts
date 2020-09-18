import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'person-book';
  someJson: any;

  // Json Pipe example
  ngOnInit() {
    this.someJson = {
      a: 'value',
      b: 'another'
    };
  }
}

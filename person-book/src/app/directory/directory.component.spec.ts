import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleService } from '../core/http/people/people.service';

import { DirectoryComponent } from './directory.component';

describe('DirectoryComponent', () => {
  let component: DirectoryComponent;
  let fixture: ComponentFixture<DirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectoryComponent],
      imports: [HttpClientTestingModule],
      providers: [PeopleService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

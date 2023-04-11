import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/interfaces/person.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent implements OnInit {
  person: Person;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializePerson();
  }

  initializePerson(): void {
    this.person = this.activatedRoute.snapshot.data['person'];
  }
}

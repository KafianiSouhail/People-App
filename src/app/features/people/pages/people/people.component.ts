import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { Person } from '../../models/interfaces/person.interface';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  readonly PAGE_SIZE: number = 10;
  page: number = 1;
  people$: Observable<Person[]>;
  count: number = 0;
  searchKeyword: string = '';

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.people$ = this.createPeopleObservable();
  }

  onPageChanges(page: number): void {
    this.page = page;
    this.people$ = this.createPeopleObservable();
  }

  createPeopleObservable(): Observable<Person[]> {
    return this.peopleService
      .fetchPeople({
        pageNumber: this.page,
        pageSize: this.PAGE_SIZE,
        searchKeyword: this.searchKeyword,
      })
      .pipe(
        tap(({ count }) => (this.count = count)),
        map(({ results }) => results)
      );
  }

  onSearchKeywordChanges(keyword: any): void {
    this.searchKeyword = keyword;
    this.people$ = this.createPeopleObservable();
  }
}

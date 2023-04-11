import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../models/interfaces/person.interface';
import { PeopleService } from '../services/people.service';

@Injectable()
export class PersonResolver implements Resolve<Observable<Person>> {
  constructor(private peopleService: PeopleService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Person> {
    const personId: number = route.params['id'];
    return this.peopleService.fetchPerson(personId);
  }
}

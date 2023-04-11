import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHttpService } from 'src/app/core/services';
import { Person } from '../models/interfaces/person.interface';
import { ApiRoutes } from 'src/app/core/models/enums';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class PeopleService {
  constructor(private apiService: ApiHttpService) {}

  fetchPeople({
    pageNumber,
    pageSize,
    searchKeyword,
  }: {
    pageNumber: number;
    pageSize: number;
    searchKeyword: string;
  }): Observable<any> {
    const params: HttpParams = new HttpParams()
      .append('page', pageNumber)
      .append('page_size', pageSize)
      .append('search', searchKeyword);
    return this.apiService.get<any>(ApiRoutes.PEOPLE, params);
  }

  fetchPerson(id: number): Observable<Person> {
    return this.apiService.get<Person>(`${ApiRoutes.PEOPLE}${id}`);
  }
}

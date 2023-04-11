import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../models/interfaces/person.interface';
import { Router } from '@angular/router';
import { MyRoutes } from 'src/app/core/models/enums';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListComponent {
  @Input() people$: Observable<Person[]>;
  constructor(private router: Router) {}

  trackByFn(index: number, item: Person): string {
    return item.url;
  }

  navigateToPersonDetails(person: Person): void {
    const splitedUrlArray: string[] = person.url.split('/');
    const id: number = +splitedUrlArray[splitedUrlArray.length - 2];
    this.router.navigate([MyRoutes.PEOPLE, id]);
  }
}

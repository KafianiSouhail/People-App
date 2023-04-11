import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Person } from '../../models/interfaces/person.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonComponent implements OnInit {
  @Input() person: Person;

  constructor() {}

  ngOnInit(): void {}
}

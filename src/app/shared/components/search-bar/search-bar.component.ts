import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  takeUntil,
  tap,
} from 'rxjs';
import { SharedModule } from '../../shared.module';
import 'boxicons';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() searchKeywordChanges: EventEmitter<string> = new EventEmitter();
  @ViewChild('searchBar', { static: true }) searchBarRef: ElementRef;
  subjectForUnsbuscription: Subject<any> = new Subject();
  readonly DEBOUNCE_TIMER: number = 500;
  constructor() {}

  ngOnInit(): void {
    this.onSearchKeywordChanges();
  }

  onSearchKeywordChanges(): void {
    fromEvent<any>(this.searchBarRef.nativeElement, 'input')
      .pipe(
        takeUntil(this.subjectForUnsbuscription),
        map(({ target }) => target.value),
        debounceTime(this.DEBOUNCE_TIMER),
        distinctUntilChanged(),
        tap((keywoard) => this.searchKeywordChanges.emit(keywoard))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subjectForUnsbuscription.next('');
    this.subjectForUnsbuscription.complete();
  }
}

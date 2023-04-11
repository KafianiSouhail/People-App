import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() page: number = 1;
  @Input() collectionSize: number;
  @Input() pageSize: number;
  @Output() pageChanges: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onPageChanges(page: number): void {
    this.pageChanges.emit(page);
  }
}

import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [SharedModule, NgbDropdownModule],
})
export class HeaderComponent implements OnInit {
  constructor(private translator: TranslateService) {}

  ngOnInit(): void {}

  onLanguageChanges(languageCode: any): void {
    this.translator.use(languageCode.target.value);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, TranslateModule],
  exports: [TranslateModule],
})
export class SharedModule {}

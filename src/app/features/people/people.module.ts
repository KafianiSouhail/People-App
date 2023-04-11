import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleComponent } from './pages/people/people.component';
import { PersonComponent } from './components/person/person.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { PeopleService } from './services/people.service';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';
import { PeopleDetailsComponent } from './pages/people-details/people-details.component';
import { PersonResolver } from './guards/person.resolver';

@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleComponent,
    PersonComponent,
    PeopleDetailsComponent,
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule,
    HeaderComponent,
    PaginatorComponent,
    SearchBarComponent,
  ],
  providers: [PeopleService, PersonResolver],
})
export class PeopleModule {}

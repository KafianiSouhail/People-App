import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailsComponent } from './pages/people-details/people-details.component';
import { PeopleComponent } from './pages/people/people.component';
import { PersonResolver } from './guards/person.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PeopleComponent,
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: PeopleDetailsComponent,
        resolve: { person: PersonResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}

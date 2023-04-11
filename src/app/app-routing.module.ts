import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRoutes } from './core/models/enums';

const routes: Routes = [
  {
    path: MyRoutes.HOME,
    redirectTo: MyRoutes.PEOPLE,
    pathMatch: 'full',
  },
  {
    path: MyRoutes.PEOPLE,
    loadChildren: () =>
      import('./features/people/people.module').then(
        (module) => module.PeopleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

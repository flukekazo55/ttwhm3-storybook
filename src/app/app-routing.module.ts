import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dawi',
    loadChildren: () =>
      import('./modules/dawi/dawi.module').then((m) => m.DawiModule),
  },
  {
    path: 'empire',
    loadChildren: () =>
      import('./modules/empire/empire.module').then(
        (m) => m.EmpireModule,
      ),
  },
  {
    path: 'khorne',
    loadChildren: () =>
      import('./modules/khorne/khorne.module').then(
        (m) => m.KhorneModule,
      ),
  },
  {
    path: 'high-elves',
    loadChildren: () =>
      import('./modules/high-elves/high-elves.module').then(
        (m) => m.HighElvesModule,
      ),
  },

  {
    path: 'skaven',
    loadChildren: () =>
      import('./modules/skaven/skaven.module').then(
        (m) => m.SkavenModule,
      ),
  },
  {
    path: '',
    loadChildren: () => import('./modules/landing/landing.module').then((m) => m.LandingModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

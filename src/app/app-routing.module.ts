import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dawi',
    loadChildren: () =>
      import('./modules/chronicle/chronicle.module').then((m) => m.ChronicleModule),
  },
  {
    path: 'empire',
    loadChildren: () =>
      import('./modules/empire-chronicle/empire-chronicle.module').then(
        (m) => m.EmpireChronicleModule,
      ),
  },
  {
    path: 'khorne',
    loadChildren: () =>
      import('./modules/khorne-chronicle/khorne-chronicle.module').then(
        (m) => m.KhorneChronicleModule,
      ),
  },
  {
    path: 'high-elves',
    loadChildren: () =>
      import('./modules/high-elves-chronicle/high-elves-chronicle.module').then(
        (m) => m.HighElvesChronicleModule,
      ),
  },

  {
    path: 'skaven',
    loadChildren: () =>
      import('./modules/skaven-chronicle/skaven-chronicle.module').then(
        (m) => m.SkavenChronicleModule,
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

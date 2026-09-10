import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dawi',
    loadChildren: () =>
      import('./modules/chronicle/chronicle.module').then((m) => m.ChronicleModule),
  },
  {
    path: 'khorne',
    loadChildren: () =>
      import('./modules/khorne-chronicle/khorne-chronicle.module').then(
        (m) => m.KhorneChronicleModule,
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

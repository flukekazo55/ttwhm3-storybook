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
      import('./modules/empire/empire.module').then((m) => m.EmpireModule),
  },
  {
    path: 'khorne',
    loadChildren: () =>
      import('./modules/khorne/khorne.module').then((m) => m.KhorneModule),
  },
  {
    path: 'high-elves',
    loadChildren: () =>
      import('./modules/high-elves/high-elves.module').then((m) => m.HighElvesModule),
  },
  {
    path: 'skaven',
    loadChildren: () =>
      import('./modules/skaven/skaven.module').then((m) => m.SkavenModule),
  },
  {
    path: 'grand-cathay',
    loadChildren: () =>
      import('./modules/grand-cathay/grand-cathay.module').then((m) => m.GrandCathayModule),
  },
  {
    path: 'kislev',
    loadChildren: () =>
      import('./modules/kislev/kislev.module').then((m) => m.KislevModule),
  },
  {
    path: 'beastmen',
    loadChildren: () =>
      import('./modules/beastmen/beastmen.module').then((m) => m.BeastmenModule),
  },
  {
    path: 'bretonnia',
    loadChildren: () =>
      import('./modules/bretonnia/bretonnia.module').then((m) => m.BretonniaModule),
  },
  {
    path: 'chaos-dwarfs',
    loadChildren: () =>
      import('./modules/chaos-dwarfs/chaos-dwarfs.module').then((m) => m.ChaosDwarfsModule),
  },
  {
    path: 'daemons-of-chaos',
    loadChildren: () =>
      import('./modules/daemons-of-chaos/daemons-of-chaos.module').then((m) => m.DaemonsOfChaosModule),
  },
  {
    path: 'dark-elves',
    loadChildren: () =>
      import('./modules/dark-elves/dark-elves.module').then((m) => m.DarkElvesModule),
  },
  {
    path: 'greenskins',
    loadChildren: () =>
      import('./modules/greenskins/greenskins.module').then((m) => m.GreenskinsModule),
  },
  {
    path: 'lizardmen',
    loadChildren: () =>
      import('./modules/lizardmen/lizardmen.module').then((m) => m.LizardmenModule),
  },
  {
    path: 'norsca',
    loadChildren: () =>
      import('./modules/norsca/norsca.module').then((m) => m.NorscaModule),
  },
  {
    path: 'nurgle',
    loadChildren: () =>
      import('./modules/nurgle/nurgle.module').then((m) => m.NurgleModule),
  },
  {
    path: 'ogre-kingdoms',
    loadChildren: () =>
      import('./modules/ogre-kingdoms/ogre-kingdoms.module').then((m) => m.OgreKingdomsModule),
  },
  {
    path: 'slaanesh',
    loadChildren: () =>
      import('./modules/slaanesh/slaanesh.module').then((m) => m.SlaaneshModule),
  },
  {
    path: 'tomb-kings',
    loadChildren: () =>
      import('./modules/tomb-kings/tomb-kings.module').then((m) => m.TombKingsModule),
  },
  {
    path: 'tzeentch',
    loadChildren: () =>
      import('./modules/tzeentch/tzeentch.module').then((m) => m.TzeentchModule),
  },
  {
    path: 'vampire-coast',
    loadChildren: () =>
      import('./modules/vampire-coast/vampire-coast.module').then((m) => m.VampireCoastModule),
  },
  {
    path: 'vampire-counts',
    loadChildren: () =>
      import('./modules/vampire-counts/vampire-counts.module').then((m) => m.VampireCountsModule),
  },
  {
    path: 'warriors-of-chaos',
    loadChildren: () =>
      import('./modules/warriors-of-chaos/warriors-of-chaos.module').then((m) => m.WarriorsOfChaosModule),
  },
  {
    path: 'wood-elves',
    loadChildren: () =>
      import('./modules/wood-elves/wood-elves.module').then((m) => m.WoodElvesModule),
  },
  {
    path: '',
    loadChildren: () => import('./modules/landing/landing.module').then((m) => m.LandingModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableViewTransitions: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

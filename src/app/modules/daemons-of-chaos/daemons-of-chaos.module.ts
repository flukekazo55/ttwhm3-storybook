import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DaemonsOfChaosComponent } from './daemons-of-chaos.component';

const routes: Routes = [{ path: '', component: DaemonsOfChaosComponent }];

@NgModule({
  declarations: [DaemonsOfChaosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DaemonsOfChaosModule {}

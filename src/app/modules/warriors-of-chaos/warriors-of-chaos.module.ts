import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WarriorsOfChaosComponent } from './warriors-of-chaos.component';

const routes: Routes = [{ path: '', component: WarriorsOfChaosComponent }];

@NgModule({
  declarations: [WarriorsOfChaosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class WarriorsOfChaosModule {}

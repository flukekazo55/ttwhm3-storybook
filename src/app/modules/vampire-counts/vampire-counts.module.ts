import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VampireCountsComponent } from './vampire-counts.component';

const routes: Routes = [{ path: '', component: VampireCountsComponent }];

@NgModule({
  declarations: [VampireCountsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class VampireCountsModule {}

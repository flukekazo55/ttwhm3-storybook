import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TombKingsComponent } from './tomb-kings.component';

const routes: Routes = [{ path: '', component: TombKingsComponent }];

@NgModule({
  declarations: [TombKingsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TombKingsModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LizardmenComponent } from './lizardmen.component';

const routes: Routes = [{ path: '', component: LizardmenComponent }];

@NgModule({
  declarations: [LizardmenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LizardmenModule {}

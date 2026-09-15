import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeastmenComponent } from './beastmen.component';

const routes: Routes = [{ path: '', component: BeastmenComponent }];

@NgModule({
  declarations: [BeastmenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BeastmenModule {}

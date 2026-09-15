import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SlaaneshComponent } from './slaanesh.component';

const routes: Routes = [{ path: '', component: SlaaneshComponent }];

@NgModule({
  declarations: [SlaaneshComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SlaaneshModule {}

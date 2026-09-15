import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NurgleComponent } from './nurgle.component';

const routes: Routes = [{ path: '', component: NurgleComponent }];

@NgModule({
  declarations: [NurgleComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NurgleModule {}

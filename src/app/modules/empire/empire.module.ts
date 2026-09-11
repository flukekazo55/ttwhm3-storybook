import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpireComponent } from './empire.component';

const routes: Routes = [{ path: '', component: EmpireComponent }];

@NgModule({
  declarations: [EmpireComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EmpireModule {}

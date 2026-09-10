import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpireChronicleComponent } from './empire-chronicle.component';

const routes: Routes = [{ path: '', component: EmpireChronicleComponent }];

@NgModule({
  declarations: [EmpireChronicleComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EmpireChronicleModule {}

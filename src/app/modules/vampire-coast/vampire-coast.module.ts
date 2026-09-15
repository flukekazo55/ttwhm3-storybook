import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VampireCoastComponent } from './vampire-coast.component';

const routes: Routes = [{ path: '', component: VampireCoastComponent }];

@NgModule({
  declarations: [VampireCoastComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class VampireCoastModule {}

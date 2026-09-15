import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChaosDwarfsComponent } from './chaos-dwarfs.component';

const routes: Routes = [{ path: '', component: ChaosDwarfsComponent }];

@NgModule({
  declarations: [ChaosDwarfsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ChaosDwarfsModule {}

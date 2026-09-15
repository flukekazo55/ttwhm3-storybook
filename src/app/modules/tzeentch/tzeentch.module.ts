import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TzeentchComponent } from './tzeentch.component';

const routes: Routes = [{ path: '', component: TzeentchComponent }];

@NgModule({
  declarations: [TzeentchComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TzeentchModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GrandCathayComponent } from './grand-cathay.component';

const routes: Routes = [{ path: '', component: GrandCathayComponent }];

@NgModule({
  declarations: [GrandCathayComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GrandCathayModule {}

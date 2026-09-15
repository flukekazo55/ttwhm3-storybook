import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KislevComponent } from './kislev.component';

const routes: Routes = [{ path: '', component: KislevComponent }];

@NgModule({
  declarations: [KislevComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class KislevModule {}

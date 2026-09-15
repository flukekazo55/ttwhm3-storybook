import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GreenskinsComponent } from './greenskins.component';

const routes: Routes = [{ path: '', component: GreenskinsComponent }];

@NgModule({
  declarations: [GreenskinsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GreenskinsModule {}

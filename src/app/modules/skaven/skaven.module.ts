import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkavenComponent } from './skaven.component';

const routes: Routes = [{ path: '', component: SkavenComponent }];

@NgModule({
  declarations: [SkavenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SkavenModule {}

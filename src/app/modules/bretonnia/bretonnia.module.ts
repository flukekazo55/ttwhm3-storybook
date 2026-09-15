import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BretonniaComponent } from './bretonnia.component';

const routes: Routes = [{ path: '', component: BretonniaComponent }];

@NgModule({
  declarations: [BretonniaComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BretonniaModule {}

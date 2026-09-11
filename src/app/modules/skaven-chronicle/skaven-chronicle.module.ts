import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkavenChronicleComponent } from './skaven-chronicle.component';

const routes: Routes = [{ path: '', component: SkavenChronicleComponent }];

@NgModule({
  declarations: [SkavenChronicleComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SkavenChronicleModule {}

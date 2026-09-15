import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NorscaComponent } from './norsca.component';

const routes: Routes = [{ path: '', component: NorscaComponent }];

@NgModule({
  declarations: [NorscaComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NorscaModule {}

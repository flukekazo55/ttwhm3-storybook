import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HighElvesComponent } from './high-elves.component';

const routes: Routes = [{ path: '', component: HighElvesComponent }];

@NgModule({
  declarations: [HighElvesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HighElvesModule {}

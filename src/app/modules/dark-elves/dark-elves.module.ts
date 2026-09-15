import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DarkElvesComponent } from './dark-elves.component';

const routes: Routes = [{ path: '', component: DarkElvesComponent }];

@NgModule({
  declarations: [DarkElvesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DarkElvesModule {}

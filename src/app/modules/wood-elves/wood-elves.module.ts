import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WoodElvesComponent } from './wood-elves.component';

const routes: Routes = [{ path: '', component: WoodElvesComponent }];

@NgModule({
  declarations: [WoodElvesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class WoodElvesModule {}

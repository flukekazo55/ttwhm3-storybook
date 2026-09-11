import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HighElvesChronicleComponent } from './high-elves-chronicle.component';

const routes: Routes = [{ path: '', component: HighElvesChronicleComponent }];

@NgModule({
  declarations: [HighElvesChronicleComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HighElvesChronicleModule {}

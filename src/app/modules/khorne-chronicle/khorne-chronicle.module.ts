import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KhorneChronicleComponent } from './khorne-chronicle.component';
import { KhorneCoverComponent } from './khorne-cover/khorne-cover.component';

const routes: Routes = [{ path: '', component: KhorneChronicleComponent }];

@NgModule({
  declarations: [KhorneChronicleComponent, KhorneCoverComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class KhorneChronicleModule {}

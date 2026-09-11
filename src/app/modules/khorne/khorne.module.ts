import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KhorneComponent } from './khorne.component';
import { KhorneCoverComponent } from './khorne-cover/khorne-cover.component';

const routes: Routes = [{ path: '', component: KhorneComponent }];

@NgModule({
  declarations: [KhorneComponent, KhorneCoverComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class KhorneModule {}

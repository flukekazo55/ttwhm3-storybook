import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OgreKingdomsComponent } from './ogre-kingdoms.component';

const routes: Routes = [{ path: '', component: OgreKingdomsComponent }];

@NgModule({
  declarations: [OgreKingdomsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OgreKingdomsModule {}

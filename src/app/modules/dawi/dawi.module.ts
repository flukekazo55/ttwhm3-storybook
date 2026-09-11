import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DawiComponent } from './dawi.component';
import { DawiCoverComponent } from './dawi-cover/dawi-cover.component';
import { chronicleReducer } from '../../shared/stores/chronicle/chronicle.reducer';
import { ChronicleEffects } from '../../shared/stores/chronicle/chronicle.effect';

const routes: Routes = [{ path: '', component: DawiComponent }];

@NgModule({
  declarations: [DawiComponent, DawiCoverComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('chronicle', chronicleReducer),
    EffectsModule.forFeature([ChronicleEffects]),
  ],
})
export class DawiModule {}

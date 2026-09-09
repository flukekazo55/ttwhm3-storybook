import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChronicleState } from './chronicle.model';

export const selectChronicleState =
  createFeatureSelector<ChronicleState>('chronicle');

export const selectChronicleVm = createSelector(
  selectChronicleState,
  (state) => state
);

export const selectChapters = createSelector(
  selectChronicleState,
  (state) => state.chapters
);

export const selectActiveChapterId = createSelector(
  selectChronicleState,
  (state) => state.activeChapterId
);

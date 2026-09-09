import { createAction, props } from '@ngrx/store';
import { Chapter } from './chronicle.model';

export const loadChapters = createAction('[Chronicle] Load Chapters');
export const loadChaptersSuccess = createAction(
  '[Chronicle] Load Chapters Success',
  props<{ chapters: Chapter[] }>()
);
export const loadChaptersFailure = createAction(
  '[Chronicle] Load Chapters Failure',
  props<{ error: string }>()
);

export const setActiveChapter = createAction(
  '[Chronicle] Set Active Chapter',
  props<{ id: string }>()
);

export const increaseFontSize = createAction('[Chronicle] Increase Font Size');
export const decreaseFontSize = createAction('[Chronicle] Decrease Font Size');
export const toggleTheme = createAction('[Chronicle] Toggle Theme');

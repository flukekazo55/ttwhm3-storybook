import { createReducer, on } from '@ngrx/store';
import {
  ChronicleState,
  DEFAULT_FONT_SIZE,
  MAX_FONT_SIZE,
  MIN_FONT_SIZE,
  ReaderTheme,
} from './chronicle.model';
import {
  loadChapters,
  loadChaptersSuccess,
  loadChaptersFailure,
  setActiveChapter,
  increaseFontSize,
  decreaseFontSize,
  toggleTheme,
} from './chronicle.action';

export const initialState: ChronicleState = {
  chapters: [],
  activeChapterId: null,
  fontSize: DEFAULT_FONT_SIZE,
  theme: 'day',
  loading: false,
  error: null,
};

export const chronicleReducer = createReducer(
  initialState,
  on(loadChapters, (state) => ({ ...state, loading: true, error: null })),
  on(loadChaptersSuccess, (state, { chapters }) => ({
    ...state,
    chapters,
    activeChapterId: state.activeChapterId ?? chapters[0]?.id ?? null,
    loading: false,
  })),
  on(loadChaptersFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(setActiveChapter, (state, { id }) => ({ ...state, activeChapterId: id })),
  on(increaseFontSize, (state) => ({
    ...state,
    fontSize: Math.min(MAX_FONT_SIZE, state.fontSize + 1),
  })),
  on(decreaseFontSize, (state) => ({
    ...state,
    fontSize: Math.max(MIN_FONT_SIZE, state.fontSize - 1),
  })),
  on(toggleTheme, (state) => ({
    ...state,
    theme: (state.theme === 'day' ? 'night' : 'day') as ReaderTheme,
  })),
);

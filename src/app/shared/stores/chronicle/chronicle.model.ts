export type ReaderTheme = 'day' | 'night';

export interface Chapter {
  id: string;
  numeral: string;
  title: string;
}

export interface ChronicleState {
  chapters: Chapter[];
  activeChapterId: string | null;
  fontSize: number;
  theme: ReaderTheme;
  loading: boolean;
  error: string | null;
}

export const MIN_FONT_SIZE = 14;
export const MAX_FONT_SIZE = 23;
export const DEFAULT_FONT_SIZE = 17;

import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ChronicleState } from '../../shared/stores/chronicle/chronicle.model';
import { selectChronicleVm } from '../../shared/stores/chronicle/chronicle.selector';
import {
  loadChapters,
  setActiveChapter,
  increaseFontSize,
  decreaseFontSize,
  toggleTheme,
} from '../../shared/stores/chronicle/chronicle.action';

@Component({
  selector: 'app-dawi',
  templateUrl: './dawi.component.html',
  styleUrls: ['../../shared/styles/chronicle-book.scss'],
})
export class DawiComponent implements OnInit {
  private store = inject(Store);

  vm$: Observable<ChronicleState> = this.store.select(selectChronicleVm);
  progress = 0;

  private activeId: string | null = null;

  @ViewChild('book') private book?: ElementRef<HTMLElement>;
  @ViewChildren('chapterEl') private chapterEls?: QueryList<ElementRef<HTMLElement>>;

  ngOnInit(): void {
    this.store.dispatch(loadChapters());
  }

  onOpenBook(): void {
    this.book?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  onFontLarger(): void {
    this.store.dispatch(increaseFontSize());
  }

  onFontSmaller(): void {
    this.store.dispatch(decreaseFontSize());
  }

  onToggleTheme(): void {
    this.store.dispatch(toggleTheme());
  }

  goToChapter(id: string): void {
    this.chapterById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  onPrevChapter(): void {
    this.stepChapter(-1);
  }

  onNextChapter(): void {
    this.stepChapter(1);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    this.progress = max > 0 ? (window.scrollY / max) * 100 : 0;

    const activeId = this.currentChapterId();
    if (activeId && activeId !== this.activeId) {
      this.activeId = activeId;
      this.store.dispatch(setActiveChapter({ id: activeId }));
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    const tag = document.activeElement?.tagName ?? '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') {
      return;
    }
    if (event.key === 'ArrowRight') {
      this.stepChapter(1);
    }
    if (event.key === 'ArrowLeft') {
      this.stepChapter(-1);
    }
  }

  private chapters(): HTMLElement[] {
    return (this.chapterEls?.toArray() ?? []).map((ref) => ref.nativeElement);
  }

  private chapterById(id: string): HTMLElement | undefined {
    return this.chapters().find((el) => el.id === id);
  }

  private currentChapterId(): string | null {
    const chapters = this.chapters();
    if (!chapters.length) {
      return null;
    }
    const threshold = window.scrollY + window.innerHeight * 0.35;
    let active = chapters[0];
    for (const el of chapters) {
      if (el.offsetTop < threshold) {
        active = el;
      }
    }
    return active.id;
  }

  private stepChapter(delta: number): void {
    const chapters = this.chapters();
    if (!chapters.length) {
      return;
    }
    const currentId = this.currentChapterId();
    const index = chapters.findIndex((el) => el.id === currentId);
    const next = Math.min(chapters.length - 1, Math.max(0, index + delta));
    chapters[next].scrollIntoView({ behavior: 'smooth' });
  }
}

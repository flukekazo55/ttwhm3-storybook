import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

interface TocChapter {
  id: string;
  numeral: string;
  title: string;
}

@Component({
  selector: 'app-empire',
  templateUrl: './empire.component.html',
  styleUrls: [
    '../../shared/styles/chronicle-book.scss',
    './empire.component.scss',
  ],
})
export class EmpireComponent {
  readonly chapters: TocChapter[] = [
    { id: 'ch1', numeral: 'I', title: 'The Empire คือใคร?' },
    { id: 'ch2', numeral: 'II', title: 'Sigmar และการก่อตั้ง' },
    { id: 'ch3', numeral: 'III', title: 'Elector Counts และจังหวัด' },
    { id: 'ch4', numeral: 'IV', title: 'Karl Franz' },
    { id: 'ch5', numeral: 'V', title: 'ศรัทธาและ Colleges of Magic' },
    { id: 'ch6', numeral: 'VI', title: 'เมือง วิศวกรรม และดินปืน' },
    { id: 'ch7', numeral: 'VII', title: 'กองทัพแบบ Combined Arms' },
    { id: 'ch8', numeral: 'VIII', title: 'ศัตรูของจักรวรรดิ' },
    { id: 'ch9', numeral: 'IX', title: 'The Empire ใน WARHAMMER III' },
    { id: 'sources', numeral: 'X', title: 'สรุปและแหล่งอ่านต่อ' },
  ];

  progress = 0;
  fontSize = 17;
  theme: 'day' | 'night' = 'day';
  activeChapterId = 'ch1';

  @ViewChild('book') private book?: ElementRef<HTMLElement>;
  @ViewChildren('chapterEl') private chapterEls?: QueryList<ElementRef<HTMLElement>>;

  onOpenBook(): void {
    this.book?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  onFontLarger(): void {
    this.fontSize = Math.min(23, this.fontSize + 1);
  }

  onFontSmaller(): void {
    this.fontSize = Math.max(14, this.fontSize - 1);
  }

  onToggleTheme(): void {
    this.theme = this.theme === 'night' ? 'day' : 'night';
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
    this.activeChapterId = this.currentChapterId() ?? this.activeChapterId;
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

  private chaptersElements(): HTMLElement[] {
    return (this.chapterEls?.toArray() ?? []).map((ref) => ref.nativeElement);
  }

  private chapterById(id: string): HTMLElement | undefined {
    return this.chaptersElements().find((el) => el.id === id);
  }

  private currentChapterId(): string | null {
    const chapters = this.chaptersElements();
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
    const chapters = this.chaptersElements();
    if (!chapters.length) {
      return;
    }

    const currentId = this.currentChapterId();
    const index = Math.max(0, chapters.findIndex((el) => el.id === currentId));
    const next = Math.min(chapters.length - 1, Math.max(0, index + delta));
    chapters[next].scrollIntoView({ behavior: 'smooth' });
  }
}

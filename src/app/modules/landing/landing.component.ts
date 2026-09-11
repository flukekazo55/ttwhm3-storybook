import { Component } from '@angular/core';

interface Faction {
  id: string;
  route: string;
  sigil: string;
  bookTitle: string;
  bookSubtitle: string;
  thaiTitle: string;
  cover: string;
  chapters: number;
  highlights: string[];
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  readonly factions: Faction[] = [
    {
      id: 'dawi',
      route: '/dawi',
      sigil: '⚒',
      bookTitle: 'DAMMAZ KRON',
      bookSubtitle: 'A Dawi Chronicle',
      thaiTitle: 'พงศาวดารคนแคระ',
      cover: '/assets/dawi/dawi_cover.png',
      chapters: 9,
      highlights: ['Karaz Ankor', 'Book of Grudges', 'The Deeps'],
    },
    {
      id: 'empire',
      route: '/empire',
      sigil: '☄',
      bookTitle: 'THE EMPIRE',
      bookSubtitle: 'The Imperial Chronicle',
      thaiTitle: 'พงศาวดารจักรวรรดิมนุษย์',
      cover: '/assets/empire/empire_karl-franz.png',
      chapters: 10,
      highlights: ['Sigmar', 'Elector Counts', 'Steam Tank'],
    },
    {
      id: 'khorne',
      route: '/khorne',
      sigil: '☠',
      bookTitle: 'THE BLOOD CHRONICLE',
      bookSubtitle: 'A Khorne Chronicle',
      thaiTitle: 'พงศาวดารเทพแห่งสงคราม',
      cover: '/assets/khorne/khorne_cover.png',
      chapters: 9,
      highlights: ['Brass Citadel', 'Bloodletting', 'Blood Host'],
    },
    {
      id: 'high-elves',
      route: '/high-elves',
      sigil: '🏹',
      bookTitle: 'THE HIGH ELVES CHRONICLE',
      bookSubtitle: 'A High Elves Chronicle',
      thaiTitle: 'พงศาวดารแห่งอุลธูอัน',
      cover: '/assets/high-elves/high-elves_cover.png',
      chapters: 10,
      highlights: ['Ulthuan', 'Tyrion & Teclis', 'Magic & Dragons'],
    },
    {
      id: 'skaven',
      route: '/skaven',
      sigil: '🐀',
      bookTitle: 'THE SKAVEN CHRONICLE',
      bookSubtitle: 'A Skaven Chronicle',
      thaiTitle: 'พงศาวดารหนู Skaven',
      cover: '/assets/skaven/skaven_cover.png',
      chapters: 10,
      highlights: ['Under-Empire', 'Warpstone', 'Warlock Engineers'],
    },
    {
      id: 'grand-cathay',
      route: '/grand-cathay',
      sigil: '龍',
      bookTitle: 'THE GRAND CATHAY CHRONICLE',
      bookSubtitle: 'A Grand Cathay Chronicle',
      thaiTitle: 'พงศาวดารแห่งจักรวรรดิมังกรสวรรค์',
      cover: '/assets/grand-cathay/grand-cathay_cover.png',
      chapters: 10,
      highlights: ['Great Bastion', 'Harmony', 'Dragon Siblings'],
    },
  ];
}

import { Component } from '@angular/core';

interface Faction {
  id: string;
  route: string;
  sigil: string;
  bookTitle: string;
  bookSubtitle: string;
  thaiTitle: string;
  tagline: string;
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
      tagline:
        'รากเหง้าของ Karaz Ankor, ความหมายของ “ความแค้น”, Legendary Lords และระบบ Great Book of Grudges กับ The Deeps',
      cover: '/assets/chronicle-cover.png',
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
      tagline:
        'Sigmar ผู้รวบรวมเผ่ามนุษย์, Elector Counts และจังหวัด, Karl Franz, Colleges of Magic ไปจนถึงดินปืน ปืนใหญ่ และ Steam Tank',
      cover: '/assets/empire-karl-franz.png',
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
      tagline:
        'ตัวตนของ Khorne, Realm of Chaos และ Brass Citadel, Legendary Lords ไปจนถึง Bloodletting, Skulls และการจัดทัพบุกประชิด',
      cover: '/assets/khorne-cover.png',
      chapters: 9,
      highlights: ['Brass Citadel', 'Bloodletting', 'Blood Host'],
    },
  ];
}

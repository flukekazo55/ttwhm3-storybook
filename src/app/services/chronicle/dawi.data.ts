import { Chapter } from '../../shared/stores/chronicle/chronicle.model';

// Table-of-contents metadata. Chapter bodies live in the reader template;
// this drives the sidebar, scroll-spy and prev/next navigation.
export const DAWI_CHAPTERS: Chapter[] = [
  { id: 'ch1', numeral: 'I', title: 'Dawi คือใคร?' },
  { id: 'ch2', numeral: 'II', title: 'Karaz Ankor และยุครุ่งเรือง' },
  { id: 'ch3', numeral: 'III', title: 'การล่มสลายและความแค้น' },
  { id: 'ch4', numeral: 'IV', title: 'Great Book of Grudges' },
  { id: 'ch5', numeral: 'V', title: 'Legendary Lords' },
  { id: 'ch6', numeral: 'VI', title: 'The Deeps และเมืองคนแคระ' },
  { id: 'ch7', numeral: 'VII', title: 'กองทัพ Dawi' },
  { id: 'ch8', numeral: 'VIII', title: 'ถ้าเริ่มเล่นใน WH3' },
  { id: 'sources', numeral: 'IX', title: 'แหล่งอ้างอิง' },
];

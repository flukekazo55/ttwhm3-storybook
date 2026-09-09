# Dammaz Kron — Dawi Chronicle (Angular)

พอร์ตของเว็บอ่านแบบหนังสือ *Dammaz Kron* (พงศาวดารคนแคระใน Total War: WARHAMMER III)
จากไฟล์ HTML/CSS/JS หน้าเดียว มาเป็น Angular 18 ตามแนวทางของ
[angular-v18-ai-skill](https://github.com/flukekazo55/angular-v18-ai-skill).

## รันโปรเจกต์

```bash
npm install
npm start          # ng serve → http://localhost:4200
npm run build      # โปรดักชันบันด์เดิล → dist/
npm test           # unit tests (Karma/Jasmine)
```

## สถาปัตยกรรม (ตามสกิล)

- **Module-based** ทุก component เป็น `standalone: false`
- **Lazy loading** — `AppRoutingModule` โหลด `ChronicleModule` ผ่าน `loadChildren`
- **NgRx** — feature slice `chronicle` (Store + Effects + DevTools) ผ่าน `forFeature`
- **`inject()`** สำหรับ DI ใน component และ effect
- **Observable view-model** — component เปิด `vm$` และ template แกะด้วย `*ngIf="vm$ | async as vm"`

```
src/app/
├── app.module.ts                     # root: StoreModule.forRoot / EffectsModule.forRoot / DevTools
├── app-routing.module.ts             # lazy loadChildren → ChronicleModule
├── app.component.*                   # shell: <router-outlet> เท่านั้น
│
├── modules/chronicle/
│   ├── chronicle.module.ts           # forFeature('chronicle') + forFeature([ChronicleEffects])
│   ├── chronicle.component.*          # smart: vm$, scroll-spy, คีย์ลูกศร, ปุ่ม reader tools
│   └── chronicle-cover/              # presentational cover + ปุ่ม "เปิดหนังสือ"
│
├── services/chronicle/
│   ├── chronicle.service.ts          # getChapters(): Observable<Chapter[]>
│   └── chronicle.data.ts             # สารบัญ (static)
│
└── shared/
    ├── stores/chronicle/             # model / action / reducer / effect / selector
    └── utils/get-error-message.ts
```

## State ของ reader (NgRx)

`ChronicleState` เก็บ: `chapters`, `activeChapterId`, `fontSize`, `theme`, `loading`, `error`
— ปุ่ม A− / A+ / ☾ และการไฮไลต์สารบัญตามการเลื่อน ล้วน dispatch action เข้าสโตร์
(ค่า progress bar เก็บเป็น local field เพื่อไม่ให้ยิง action ทุกพิกเซลที่เลื่อน)

## หมายเหตุการพอร์ต (จุดที่ปรับจากสกิล)

- เว็บนี้เป็น **content site** ไม่มี backend จริง — `ChronicleService` จึงคืนข้อมูลด้วย `of(...)`
  โครง service/effect/error-handling ยังทำตามแพตเทิร์นของสกิล
- ติดตั้งเฉพาะ **NgRx + Sarabun** ที่ใช้จริง ไม่ได้ดึง PrimeNG/Bootstrap/sweetalert2/dayjs ที่สกิลลิสต์ไว้แต่ไม่ได้ใช้
- ใช้ **Sarabun** กับ UI chrome และคง **Noto Serif Thai** สำหรับตัวเนื้อหา เพื่อรักษาอารมณ์ "หนังสือ" ของต้นฉบับ
- ขยาย budget `anyComponentStyle` ใน `angular.json` เพราะ SCSS ของหน้าหนังสือยาวกว่า 4kB
- รูปภาพอยู่ใน `public/assets/` (เสิร์ฟที่ `/assets`)

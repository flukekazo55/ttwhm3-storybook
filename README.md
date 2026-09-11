# TTWHM3 Storybook — Dawi, Empire & Khorne (Angular)

เว็บอ่านแบบหนังสือสำหรับทำความเข้าใจ factions ใน **Total War: WARHAMMER III** แบบ lore + gameplay guide ภาษาไทย
โดยคง visual language แบบพงศาวดารแฟนตาซีเดียวกันทั้งชุด

ตอนนี้มี 3 เล่ม เข้าถึงผ่านหน้า landing:

- **Landing (เลือก faction)** — route `/`
- **Dawi Chronicle** — route `/dawi`
- **Empire Chronicle** — route `/empire`
- **Khorne Chronicle** — route `/khorne`

## รันโปรเจกต์

```bash
npm install
npm start          # ng serve → http://localhost:4200
npm run build      # production bundle → dist/
npm test           # unit tests (Karma/Jasmine)
```

## สถาปัตยกรรม

- Angular 18 แบบ **module-based** (`standalone: false`)
- Lazy routes แยกตาม faction
- Dawi Chronicle ใช้ NgRx feature slice เดิมสำหรับ reader state
- Khorne และ Empire Chronicle แยก reader state ใน component เพื่อไม่ชนกับ feature state ของ Dawi
- Shared visual language โดย Khorne และ Empire reuse SCSS ของ Dawi แล้ว override เฉพาะ theme/faction colors
- รูปทั้งหมดอยู่ใน `public/assets/` และเสิร์ฟผ่าน `/assets/...`

```text
src/app/
├── app-routing.module.ts
└── modules/
    ├── landing/                   # หน้าเลือก faction
    ├── chronicle/                 # Dawi
    │   ├── chronicle.component.*
    │   └── chronicle-cover/
    ├── empire-chronicle/          # The Empire (ปกอยู่ใน component เดียว)
    │   ├── empire-chronicle.component.*
    │   └── empire-chronicle.module.ts
    └── khorne-chronicle/          # Khorne
        ├── khorne-chronicle.component.*
        ├── khorne-chronicle.module.ts
        └── khorne-cover/

public/assets/
├── ... Dawi artwork
├── khorne-cover.jpg
├── khorne-overview-page.jpg
├── khorne-lords-page.jpg
├── khorne-battle-guide-page.png
└── empire-*.svg                # ภาพชุด Empire เป็นเวกเตอร์
```

## Reader UX

ทุกเล่มมี:

- สารบัญ sticky + active chapter
- reading progress bar
- A− / A+ ปรับขนาดตัวอักษร
- day/night reader mode
- ปุ่มบทก่อนหน้า/ถัดไป
- keyboard Arrow Left/Right
- ปุ่มสลับไปอ่านอีก faction และกลับหน้าเลือก faction จากหน้าปก

## หมายเหตุ

เว็บนี้เป็น fan-made learning project. Total War, WARHAMMER และเครื่องหมายที่เกี่ยวข้องเป็นทรัพย์สินของเจ้าของลิขสิทธิ์ตามลำดับ

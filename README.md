# TTWHM3 Storybook (Angular)

เว็บอ่านแบบหนังสือสำหรับทำความเข้าใจ factions ใน **Total War: WARHAMMER III** แบบ lore + gameplay guide ภาษาไทย
โดยคง visual language แบบพงศาวดารแฟนตาซีเดียวกันทั้งชุด

ตอนนี้มี 5 เล่ม เข้าถึงผ่านหน้า landing:

- **Landing (เลือก faction)** — route `/`
- **Dawi** — route `/dawi`
- **Empire** — route `/empire`
- **Khorne** — route `/khorne`
- **High Elves** — route `/high-elves`
- **Skaven** — route `/skaven`

## รันโปรเจกต์

```bash
npm install
npm start          # ng serve → http://localhost:4200
npm run build      # production bundle → dist/
npm test           # unit tests (Karma/Jasmine)
```

## สถาปัตยกรรม

- Angular 18 แบบ **module-based** (`standalone: false`)
- Lazy routes แยกตาม faction — 1 faction = 1 folder = 1 module (`DawiModule`, `EmpireModule`, ...)
- Dawi ใช้ NgRx feature slice สำหรับ reader state
- faction อื่นเก็บ reader state ใน component เพื่อไม่ชนกับ feature state ของ Dawi
- SCSS ฐานของเล่มหนังสืออยู่ที่ `src/app/shared/styles/` ทุก faction reuse แล้ว override เฉพาะ theme/faction colors
- รูปแยก folder ตาม faction ใน `public/assets/<faction>/` ตั้งชื่อแบบ `<faction>_<หัวข้อ>.png`

```text
src/app/
├── app-routing.module.ts
├── shared/
│   ├── styles/                    # SCSS ฐานที่ทุก faction ใช้ร่วมกัน
│   │   ├── chronicle-book.scss
│   │   └── chronicle-cover.scss
│   └── stores/chronicle/          # reader state (ตอนนี้ใช้เฉพาะ Dawi)
└── modules/
    ├── landing/                   # หน้าเลือก faction
    ├── dawi/
    │   ├── dawi.component.*
    │   ├── dawi.module.ts
    │   └── dawi-cover/
    ├── empire/
    │   ├── empire.component.*
    │   └── empire.module.ts
    ├── khorne/
    │   ├── khorne.component.*
    │   ├── khorne.module.ts
    │   └── khorne-cover/
    ├── high-elves/
    └── skaven/

public/assets/
├── shared/shared_cover-background.png
├── dawi/dawi_*.png
├── empire/empire_*.png
├── khorne/khorne_*.png
├── high-elves/high-elves_*.png
└── skaven/skaven_*.png
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

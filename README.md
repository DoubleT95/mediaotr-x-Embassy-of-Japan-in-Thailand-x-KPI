# Beyond 140 — Concept Proposal (mediator × Embassy of Japan in Thailand × KPI)

ข้อเสนอแนวคิดสำหรับวาระครบรอบ 140 ปี ความสัมพันธ์ทางการทูตไทย–ญี่ปุ่น (1887–2027)

| ไฟล์ | รายละเอียด |
| --- | --- |
| `Beyond140_Concept_Proposal.pdf` | เดคนำเสนอ 7 หน้า (16:9) — รูปแบบงาน 2 แบบ |
| `deck/beyond140.html` | ต้นฉบับเดค |
| `deck/assets/` | โลโก้ทุกองค์กร (140 ปี, สถานทูต, KPI, WBC, TopForm, A-List, mediator) และภาพผู้เสนอ |

## แนวทางการออกแบบ (ตาม CI ของ mediator)

- ขาว–ดำเป็นหลัก สีเสริมจากโลโก้: เขียว KPI `#0E4D24` และทอง `#B8913F` (ระหว่างทอง KPI และทองสถานทูต)
- ตัวอักษร Sarabun ทั้งเดค (Thin / Medium / ExtraBold ตาม CI) ภาษาญี่ปุ่นใช้ Noto Sans JP แทน Yu Gothic
- หัวกระดาษแบบ CI: แถบดำ + ชื่อหมวด ซ้ายบน, โลโก้ mediator ขวาบน, เส้นบาง และ copyright ด้านล่าง

## สร้าง PDF ใหม่

```bash
cd deck
export NODE_PATH=$(npm root -g)   # ใช้ Playwright ที่ติดตั้งแบบ global
node build.cjs beyond140.html ../Beyond140_Concept_Proposal.pdf
```

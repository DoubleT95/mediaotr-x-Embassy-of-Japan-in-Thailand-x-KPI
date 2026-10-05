# Beyond 140 — Concept Proposal (mediator × Embassy of Japan in Thailand × KPI)

ข้อเสนอแนวคิดสำหรับวาระครบรอบ 140 ปี ความสัมพันธ์ทางการทูตไทย–ญี่ปุ่น (1887–2027)

| ไฟล์ | รายละเอียด |
| --- | --- |
| `Beyond140_Concept_Proposal.pdf` | เดคนำเสนอ 6 หน้า (16:9) |
| `Beyond140_Slide_Outline.pdf` | โครงสร้างแต่ละสไลด์ (Title / Key Message / Content / Layout) และบันทึกผู้นำเสนอ (A4) |
| `deck/beyond140.html` | ต้นฉบับเดค |
| `deck/outline.html` | ต้นฉบับเอกสาร outline |
| `deck/assets/` | โลโก้ ภาพผู้เสนอ และภาพย่อสไลด์ |

## การใส่โลโก้ที่ยังรอ

ช่องโลโก้ที่ยังเป็นกรอบเส้นประมี `data-slot` กำกับไว้ใน `deck/beyond140.html`:

- `logo-140` — โลโก้ครบรอบ 140 ปี (ปก)
- `logo-kpi` — โลโก้สถาบันพระปกเกล้า (ปก และสไลด์ 6)

## สร้าง PDF ใหม่

```bash
cd deck
export NODE_PATH=$(npm root -g)   # ใช้ Playwright ที่ติดตั้งแบบ global
THUMB_JPEG=1 node build.cjs beyond140.html ../Beyond140_Concept_Proposal.pdf assets/thumbs
node build.cjs outline.html ../Beyond140_Slide_Outline.pdf "" 794 1123
```

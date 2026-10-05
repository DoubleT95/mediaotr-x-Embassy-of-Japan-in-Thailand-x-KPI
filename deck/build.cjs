// Render an HTML deck to PDF (+ optional PNG previews) with Playwright Chromium.
// usage: node build.cjs <input.html> <output.pdf> [previewDir] [w] [h]
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const [inp, out, previewDir, w = '1280', h = '720'] = process.argv.slice(2);
  const width = parseInt(w, 10), height = parseInt(h, 10);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 2 });
  await page.goto('file://' + path.resolve(inp), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const missing = await page.evaluate(() =>
    [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src));
  if (missing.length) console.warn('MISSING IMAGES:', missing);
  const overflow = await page.evaluate(() => {
    const bad = [];
    document.querySelectorAll('.slide, .page').forEach((s, i) => {
      const r = s.getBoundingClientRect();
      s.querySelectorAll('*').forEach(el => {
        const b = el.getBoundingClientRect();
        if (b.width && (b.bottom > r.bottom + 1 || b.right > r.right + 1))
          bad.push(`slide ${i + 1}: <${el.tagName.toLowerCase()} class="${el.className}"> overflows by ${Math.round(Math.max(b.bottom - r.bottom, b.right - r.right))}px`);
      });
    });
    return bad;
  });
  if (overflow.length) console.warn(overflow.slice(0, 20).join('\n'));
  await page.pdf({ path: out, width: width + 'px', height: height + 'px', printBackground: true, preferCSSPageSize: true });
  if (previewDir) {
    fs.mkdirSync(previewDir, { recursive: true });
    const slides = await page.$$('.slide, .page');
    for (let i = 0; i < slides.length; i++)
      await slides[i].screenshot(process.env.THUMB_JPEG
        ? { path: path.join(previewDir, `s${i + 1}.jpg`), type: 'jpeg', quality: 82 }
        : { path: path.join(previewDir, `s${i + 1}.png`) });
  }
  await browser.close();
  console.log('ok', out);
})();

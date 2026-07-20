const { chromium } = require("playwright");
const { PNG } = require("pngjs");
const fs = require("fs");

function luminance([r, g, b]) {
  const a = [r, g, b].map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}
function contrastRatio(rgb1, rgb2) {
  const L1 = luminance(rgb1) + 0.05, L2 = luminance(rgb2) + 0.05;
  return L1 > L2 ? L1 / L2 : L2 / L1;
}
function pixelAt(png, x, y) { const idx = (png.width * y + x) << 2; return [png.data[idx], png.data[idx + 1], png.data[idx + 2]]; }
const DIR = "C:/Users/ahmad/AppData/Local/Temp/claude/C--PROJEK-portofolio-Zufar/b2b47c87-9f85-4136-8ad3-d03bbf9fd52a/scratchpad";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 768 } });
  await page.goto("http://localhost:8123/index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);

  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  const bgImg = await page.evaluate(() => getComputedStyle(document.body).backgroundImage);
  console.log("body background-color:", bg, "| background-image (should be 'none'):", bgImg);

  const projBg = await page.evaluate(() => {
    const el = document.querySelector(".projects");
    const cs = getComputedStyle(el);
    return { color: cs.backgroundColor, image: cs.backgroundImage };
  });
  console.log(".projects background:", JSON.stringify(projBg));

  const layout = await page.evaluate(() => {
    const about = document.querySelector(".about");
    const head = document.querySelector(".about .section-head");
    const title = document.querySelector(".about .section-title");
    const grid = document.querySelector(".about-grid");
    const photo = document.querySelector(".about-photo-frame");
    const text = document.querySelector("#aboutText");
    const timeline = document.querySelector("#aboutTimeline");
    const aboutRect = about.getBoundingClientRect();
    const gridCS = getComputedStyle(grid);
    return {
      aboutPaddingTop: getComputedStyle(about).paddingTop,
      headMarginBottom: getComputedStyle(head).marginBottom,
      gapHeadToGrid: Math.round(grid.getBoundingClientRect().top - head.getBoundingClientRect().bottom),
      gridColumnGap: gridCS.columnGap,
      gridMaxWidth: gridCS.maxWidth,
      photoWidth: Math.round(photo.getBoundingClientRect().width),
      photoHeight: Math.round(photo.getBoundingClientRect().height),
      photoBorderRadius: getComputedStyle(photo).borderRadius,
      photoTop: Math.round(photo.getBoundingClientRect().top),
      textTop: Math.round(text.getBoundingClientRect().top),
      timelineGapFromText: Math.round(timeline.getBoundingClientRect().top - text.getBoundingClientRect().bottom),
      aboutSectionHeight: Math.round(aboutRect.height),
      aboutBottom: Math.round(aboutRect.bottom),
      viewportHeight: window.innerHeight
    };
  });
  console.log("ABOUT layout measurements:", JSON.stringify(layout, null, 2));

  await page.screenshot({ path: `${DIR}/v6-full-clean.png` });
  await page.evaluate(() => document.querySelector("#about").scrollIntoView());
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${DIR}/v6-about.png` });
  await page.screenshot({ path: `${DIR}/v6-texture-zoom.png`, clip: { x: 100, y: 400, width: 500, height: 200 } });

  await browser.close();

  const png = PNG.sync.read(fs.readFileSync(`${DIR}/v6-about.png`));
  const bgPixel = pixelAt(png, 700, 5);
  let darkest = [255, 255, 255], darkestLum = 1;
  for (let yy = 60; yy < 160; yy++) for (let xx = 140; xx < 500; xx++) {
    if (xx >= png.width || yy >= png.height) continue;
    const p = pixelAt(png, xx, yy);
    const l = luminance(p);
    if (l < darkestLum) { darkestLum = l; darkest = p; }
  }
  console.log("BG pixel (should be ~252,252,250):", bgPixel);
  console.log("Darkest heading text pixel:", darkest);
  console.log("Contrast ratio:", contrastRatio(darkest, bgPixel).toFixed(2));
})();

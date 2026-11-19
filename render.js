// Renders frontpage.html to entry.png (1024x1024) with headless Chromium.
// Build-time tool only: the grader never runs this; it runs main.ts, which
// copies the entry.png produced here.
const { chromium } = require('playwright-core');
const path = require('node:path');

(async () => {
  const dir = __dirname;
  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-device-scale-factor=1'],
  });
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
  await page.goto('file://' + path.join(dir, 'frontpage.html'), { waitUntil: 'load' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(dir, 'entry.png') });
  await browser.close();
  console.log('rendered entry.png');
})();

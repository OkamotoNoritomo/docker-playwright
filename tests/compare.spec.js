// tests/compare.spec.js
const { test, expect } = require('@playwright/test');

test.describe('B.LEAGUE full page visual parity (header removed via JS)', () => {
  test('Visual check', async ({ page, baseURL }) => {
    if (!baseURL) throw new Error('baseURL is undefined. Check playwright.config.js');


    // ページを開く（広告ブロックなし）
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });


    //  PlaywrightのブラウザJSを利用してヘッダーを非表示化
    await page.evaluate(() => {
      const headerSelectors = [
        'header',
        '.site-header',
        '#global-header',
        '[role="banner"]',
      ];
      for (const sel of headerSelectors) {
        document.querySelectorAll(sel).forEach(el => {
          el.style.display = 'none';
        });
      }
    });

    // スクリーンショット（ヘッダーを外した状態）
    const filename = `bleague-fullpage-noheader.png`;

    await expect(page).toHaveScreenshot(filename, {
      fullPage: true,
      maxDiffPixelRatio: 0.001, // より厳密に比較
    });
  });
});


// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  fullyParallel: true,
  reporter: 'html',

  use: {
    headless: true,
    viewport: { width: 1280, height: 900 },
    locale: 'ja-JP',
    timezoneId: 'Asia/Tokyo',
    colorScheme: 'light',
    deviceScaleFactor: 1,
  },

  snapshotPathTemplate: '{testDir}/__snapshots__/{testFilePath}/{arg}-{platform}.png',

  projects: [
    {
      name: 'prod',
      use: { baseURL: 'https://spaia.jp/basketball/bleague/' },
    },
    {
      name: 'staging',
      use: { baseURL: 'http://staging.spaia.jp/basketball/bleague/' },
    },
  ],
});


import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // TypeScrip DIR
  fullyParallel: false, // Run tests in parallel for speed
  reporter: 'html',   // Report to generate after test
  use: {
    headless: false, 
    //launchOptions:{
    //slowMo: 2000,
    //},
    trace: 'on-first-retry', 
    screenshot: 'only-on-failure', // Capture screenshot if failure
  },
  projects: [
    {
      name: 'chromium', // Run on Chrome
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
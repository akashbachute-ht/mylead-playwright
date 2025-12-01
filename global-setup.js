import { chromium } from '@playwright/test';
import { testData } from './utils/testData.js';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(testData.appUrl);

  // Login
  await page.getByPlaceholder('Email address').fill(testData.validUser.email);
  await page.getByPlaceholder('Password').fill(testData.validUser.password);
  await page.getByRole('button', { name: 'Login' }).click();

  // Wait for dashboard
  await page.getByText('Lead Analytics').waitFor({ timeout: 60000 });

  // Save storage state
  await page.context().storageState({ path: 'e2e/.auth/state.json' });

  await browser.close();
}

export default globalSetup;

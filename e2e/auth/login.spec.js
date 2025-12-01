import { test, expect } from '@playwright/test';
import { testData } from '../../utils/testData.js';
import { PageObjectManager } from '../../pages/PageObjectManager.js';

test.describe('Login Functionality', () => {
  let pageObjectManager;
  let loginPage;

  test.beforeEach(async ({ page }) => {
    pageObjectManager = new PageObjectManager(page);
    loginPage = pageObjectManager.getLoginPage();
  });

  test('Valid Login Test', async ({ page }) => {
    await loginPage.navigateTo(testData.appUrl);
    await loginPage.login(testData.validUser.email, testData.validUser.password);
    await expect(page).toHaveURL(/dashboard/);
  });

  test('Invalid Login Test', async ({ page }) => {
    await loginPage.navigateTo(testData.appUrl);
    await loginPage.login(testData.invalidUser.email, testData.invalidUser.password);
    const errorMsg = await loginPage.getErrorMessageText();
    await expect(errorMsg).toContain('Invalid email or password');
  });
});

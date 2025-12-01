import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../../pages/PageObjectManager.js';

test.describe('Dashboard Page Tests', () => {

  let pageObjectManager;
  let dashBoardPage;
  let basePage;

  test.beforeEach(async ({ page }) => {
    // Initialize Page Object Manager
    pageObjectManager = new PageObjectManager(page);
    dashBoardPage = pageObjectManager.getDashboardPage();
    basePage = pageObjectManager.getBasePage();

  });

  test('Verify Dashboard Elements Visibility', async () => {
    await dashBoardPage.navigate();
    await basePage.waitForNetworkIdle();
    await dashBoardPage.isLeadAnalyticVisible();
    await dashBoardPage.isDealAnalyticVisible();
    await dashBoardPage.isTasklistVisible();
    await dashBoardPage.isUserGoalVisible();
  });

});

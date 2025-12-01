import { LoginPage } from './ LoginPage.js';
import { DashboardPage } from './DashboardPage.js';
import { BasePage } from './BasePage.js';


class PageObjectManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.basePage = new BasePage(page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getDashboardPage() {
    return this.dashboardPage;
  }

  getBasePage() {
    return this.basePage;
  }
}

export { PageObjectManager };

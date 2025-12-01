import { expect } from '@playwright/test';
export class DashboardPage {   
  constructor(page) {
    this.page = page;
    this.leadAnalytic = page.getByRole('heading', { name: 'Lead Analytics' });
    this.dealAnalytic = page.getByRole('heading', { name: 'Deals Analytics' });
    this.tasklist = page.getByRole('heading', { name: 'Task list' });
    this.userGoal = page.getByRole('heading', { name: 'User Goals' });
    this.url = 'https://mylead-qa.heaptrace.com/#/dashboard?activetab=mydashboard';
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async isLeadAnalyticVisible() {
expect(await this.leadAnalytic.isVisible()).toBeTruthy();
  }

  async isDealAnalyticVisible() {
expect(await this.dealAnalytic.isVisible()).toBeTruthy();
  }

  async isTasklistVisible() {
expect(await this.tasklist.isVisible()).toBeTruthy();
  }

  async isUserGoalVisible() {
expect(await this.userGoal.isVisible()).toBeTruthy();
  }
}

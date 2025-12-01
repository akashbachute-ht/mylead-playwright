export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async waitForNetworkIdle(timeout = 30000) {
    await this.page.waitForLoadState('networkidle', { timeout });
  }

  async waitForVisible(selector, timeout = 30000) {
    await this.page.waitForSelector(selector, { state: 'visible', timeout });
  }

  async click(selector, timeout = 30000) {
    await this.waitForVisible(selector, timeout);
    await this.page.click(selector);
  }

  async fill(selector, value, timeout = 30000) {
    await this.waitForVisible(selector, timeout);
    await this.page.fill(selector, value);
  }

  async getText(selector, timeout = 30000) {
    await this.waitForVisible(selector, timeout);
    return await this.page.textContent(selector);
  }
}

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder('Email address');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorText = page.getByText('Invalid email or password', { exact: true });
  }

  async navigateTo(appUrl) {
    await this.page.goto(appUrl);
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessageText() {
    return this.errorText.textContent();
  }
}

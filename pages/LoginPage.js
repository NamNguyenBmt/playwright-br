class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username*' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password*' });
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.errorMessage = page.getByText('Invalid credentials');
    this.usernameError = page.getByText('This is a required field!').nth(0);
    this.passwordError = page.getByText('This is a required field!').nth(1);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getErrorMessage() {
    await this.errorMessage.waitFor({ state: 'visible' });
    return this.errorMessage;
  }
  async getMissingRequiredField() {
    await this.missingrequiredField.waitFor({ state: 'visible' });
    return this.missingrequiredField;
  }

  async getUsernameError() {
    return this.usernameError;
  }
  async getPasswordError() {
        return this.passwordError;
  } 
}
module.exports = { LoginPage };
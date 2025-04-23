const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
test('Login without username and password should show errors', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://admin.gorightstore.com/login');

  await loginPage.login('', '');

  const usernameError = await loginPage.getUsernameError();
  const passwordError = await loginPage.getPasswordError();
  await expect(usernameError).toBeVisible();
  await expect(usernameError).toHaveText('This is a required field!');
  await expect(passwordError).toBeVisible();
  await expect(passwordError).toHaveText('This is a required field!');
});
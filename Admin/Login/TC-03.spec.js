const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test('Login without username should show error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://admin.gorightstore.com/login');
  await loginPage.login('', 'admin123456');
  
  const usernameError = await loginPage.getUsernameError();
  await expect(usernameError).toBeVisible();
  await expect(usernameError).toHaveText('This is a required field!');
});
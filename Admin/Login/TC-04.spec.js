const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
test('Login without password should not show error for password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://admin.gorightstore.com/login');
  await loginPage.login('nam.nguyen', '');
  
  const passwordError = await loginPage.getPasswordError();
  await expect(passwordError).not.toBeVisible();
});
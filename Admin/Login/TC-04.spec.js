const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
test('TC_04: Login without password should not show error for password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://staging-admin.gorightstore.com/login');
  await loginPage.login('nam', '');
  
  const passwordError = await loginPage.getPasswordError();
  await expect(passwordError).not.toBeVisible();
});
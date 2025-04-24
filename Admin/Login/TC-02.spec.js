const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage'); 
test('TC_02: Login with wrong password should show error', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://staging-admin.gorightstore.com/login');

  await loginPage.login('nam', 'wrongpassword');

  const errorMessage = await loginPage.getErrorMessage();
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText('Invalid credentials');
});
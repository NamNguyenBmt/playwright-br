const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage'); 
test('Login with wrong password should show error', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://admin.gorightstore.com/login');

  await loginPage.login('nam.nguyen', 'wrongpassword');

  const errorMessage = await loginPage.getErrorMessage();
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText('Invalid credentials');
});
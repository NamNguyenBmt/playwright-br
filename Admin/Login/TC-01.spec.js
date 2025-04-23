const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage.js');

test('Login to buyRight', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto('https://admin.gorightstore.com/login');

  await loginPage.login('nam.nguyen', 'admin123456');
});
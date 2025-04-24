const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage.js');

test('TC_01: Login to buyRight', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto('https://staging-admin.gorightstore.com/login');

  await loginPage.login('nam', 'Admin123456');
});
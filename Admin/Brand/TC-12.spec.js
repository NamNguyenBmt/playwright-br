const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { BrandPage } = require('../../pages/BrandPage');

function generateRandomNumber() {
  return Math.floor(10000 + Math.random() * 90000).toString(); 
}

test('TC_12: Create and cancel a new Brand with button Cancel', async ({ page }) => {
  const loginPage = new LoginPage(page);  
  await page.goto('https://admin.gorightstore.com/login');
  await loginPage.login('nam.nguyen', 'admin123456');

  const brandPage = new BrandPage(page);
  await brandPage.goToCreateBrandPage();
  await brandPage.cancelConfirmButtonAddBrand();

});
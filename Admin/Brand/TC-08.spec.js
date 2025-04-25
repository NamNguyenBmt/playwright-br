const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { BrandPage } = require('../../pages/BrandPage');
const path = require('path');

function generateRandomNumber() {
  return Math.floor(10000 + Math.random() * 90000).toString(); 
}

test('TC_08: Create a new Brand without brand code', async ({ page }) => {
  const randomNumber = generateRandomNumber();
  const brandName = `Test${randomNumber}`;   
  const subdomain = brandName;             
  const logoPath = path.join(__dirname, '..', 'Brand', 'meo.jpg');

  const loginPage = new LoginPage(page);  
  await page.goto('https://admin.gorightstore.com/login');
  await loginPage.login('nam.nguyen', 'admin123456');

  const brandPage = new BrandPage(page);
  await brandPage.goToCreateBrandPage();
  await brandPage.createBrand(
    brandName,
    '', 
    subdomain,
    logoPath
  );
  const brandcodeMissing = await brandPage.getBrandcodeMissing();
  await expect(brandcodeMissing).toBeVisible();
  await expect(brandcodeMissing).toHaveText('This is a required field!');
});
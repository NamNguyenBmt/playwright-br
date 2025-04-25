const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { BrandPage } = require('../../pages/BrandPage');
const path = require('path');

function generateRandomNumber() {
  return Math.floor(10000 + Math.random() * 90000).toString(); 
}

test('TC_07: Create a new Brand without brand name', async ({ page }) => {
  const randomNumber = generateRandomNumber();
  const brandName = `Test${randomNumber}`;
  const brandCode = `T${randomNumber}`;    
  const subdomain = brandName;             
  const logoPath = path.join(__dirname, '..', 'Brand', 'meo.jpg');

  const loginPage = new LoginPage(page);  
  await page.goto('https://admin.gorightstore.com/login');
  await loginPage.login('nam.nguyen', 'admin123456');

  const brandPage = new BrandPage(page);
  await brandPage.goToCreateBrandPage();
  await brandPage.createBrand(
    '',
    // brandName,
    brandCode,
    subdomain,
    logoPath
  );
  const brandnameMissing = await brandPage.getBrandnameMissing();
  await expect(brandnameMissing).toBeVisible();
  await expect(brandnameMissing).toHaveText('This is a required field!');
});
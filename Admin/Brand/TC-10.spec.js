const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { BrandPage } = require('../../pages/BrandPage');

function generateRandomNumber() {
  return Math.floor(10000 + Math.random() * 90000).toString(); 
}

test('TC_10: Create a new Brand without brand logo', async ({ page }) => {
  const randomNumber = generateRandomNumber();
  const brandName = `Test${randomNumber}`;
  const brandCode = `T${randomNumber}`;   
  const subdomain = brandName;              

  const loginPage = new LoginPage(page);  
  await page.goto('https://admin.gorightstore.com/login');
  await loginPage.login('nam.nguyen', 'admin123456');

  const brandPage = new BrandPage(page);
  await brandPage.goToCreateBrandPage();
  await brandPage.createBrandMissingBrandlogo(
    brandName,
    brandCode,
    subdomain,
  );
  const brandlogoMissing = await brandPage.getBrandlogoMissing();
  await expect(brandlogoMissing).toBeVisible();
  await expect(brandlogoMissing).toHaveText('This is a required field!');
});
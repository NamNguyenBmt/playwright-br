const { test, expect } = require('@playwright/test');

test('Login to buyRight', async ({ page }) => {
  // Bước 1: Truy cập trang web
  await page.goto('https://admin.gorightstore.com/login'); 
  await page.getByRole('textbox', { name: 'Username*' }).click();
  await page.getByRole('textbox', { name: 'Username*' }).fill('nam.nguyen');
  await page.getByRole('textbox', { name: 'Username*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password*' }).fill('admin123456');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForTimeout(5000);
  await page.locator('.ant-dropdown-trigger').click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.waitForTimeout(5000);
  await expect(page).toHaveURL(/profile/);
});

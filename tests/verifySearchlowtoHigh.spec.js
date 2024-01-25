import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('#root')).toContainText('Swag Labs');
  await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="product_sort_container"]')).toBeVisible();
  await expect(page.locator('[data-test="product_sort_container"]')).toContainText('Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)');
  await page.getByText('Name (A to Z)Name (A to Z)').click();
  await page.locator('[data-test="product_sort_container"]').selectOption('lohi');
  await expect(page.locator('#contents_wrapper')).toContainText('$7.99');
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('a').filter({ hasText: '1' }).click();
  await expect(page.locator('#cart_contents_container')).toContainText('$7.99');
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
});
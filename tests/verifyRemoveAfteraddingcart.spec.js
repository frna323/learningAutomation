import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('#root')).toContainText('Swag Labs');
  await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('#item_0_title_link')).toContainText('Sauce Labs Bike Light');
  await page.locator('html').click();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')).toContainText('Add to cart');
  await expect(page.locator('#shopping_cart_container a')).toBeVisible();
  await page.locator('#shopping_cart_container a').click();
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('a').filter({ hasText: '1' }).click();
  await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toContainText('Remove');
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  await expect(page.locator('[data-test="continue-shopping"]')).toContainText('Continue Shopping');
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
});
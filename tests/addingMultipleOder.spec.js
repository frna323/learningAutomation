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
  await expect(page.locator('#item_4_title_link')).toContainText('Sauce Labs Backpack');
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toContainText('Add to cart');

  
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('#item_0_title_link')).toContainText('Sauce Labs Bike Light');
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')).toBeVisible();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await expect(page.locator('#item_1_title_link')).toContainText('Sauce Labs Bolt T-Shirt');
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')).toContainText('Add to cart');
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await expect(page.locator('#item_5_title_link')).toContainText('Sauce Labs Fleece Jacket');
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')).toBeVisible();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await expect(page.locator('a').filter({ hasText: '4' })).toBeVisible();
  await page.locator('a').filter({ hasText: '4' }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Checkout');
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('hello');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('world');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('12345');
  await expect(page.locator('[data-test="continue"]')).toContainText('Continue');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="finish"]')).toBeVisible();
  await page.locator('[data-test="finish"]').click();
  await expect(page.getByRole('img', { name: 'Pony Express' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Thank you for your order!');
});
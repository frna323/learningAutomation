import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('#item_5_title_link')).toContainText('Sauce Labs Fleece Jacket');
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')).toContainText('Add to cart');
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await expect(page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')).toContainText('Remove');
  await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
  await page.locator('#shopping_cart_container a').click();
  await expect(page.locator('[data-test="continue-shopping"]')).toContainText('Continue Shopping');
});
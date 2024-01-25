import { test, expect } from '@playwright/test';

test('verify customer checkout lifecycle', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/inventory.html');
await expect(page.locator('#header_container div').nth(1)).toBeVisible();

await expect(page.locator('#item_4_title_link')).toContainText('Sauce Labs Backpack');
await expect(page.locator('#item_0_title_link')).toContainText('Sauce Labs Bike Light');
await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
await page.getByRole('link', { name: '2' }).click();
await expect(page.getByText('Your Cart')).toBeVisible();
await expect(page.locator('#cart_contents_container')).toContainText('CHECKOUT');
await page.getByRole('link', { name: 'CHECKOUT' }).click();
await page.locator('[data-test="firstName"]').click();
await page.locator('[data-test="firstName"]').fill('farah');
await page.locator('[data-test="lastName"]').click();
await page.locator('[data-test="lastName"]').fill('ras');
await page.locator('[data-test="postalCode"]').click();
await page.locator('[data-test="postalCode"]').fill('11232');
await page.getByRole('button', { name: 'CONTINUE' }).click();
await expect(page.locator('#checkout_summary_container')).toContainText('SauceCard #31337');
await expect(page.locator('#checkout_summary_container')).toContainText('FREE PONY EXPRESS DELIVERY!');
await page.getByRole('link', { name: 'FINISH' }).click();
await expect(page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' })).toBeVisible();
});

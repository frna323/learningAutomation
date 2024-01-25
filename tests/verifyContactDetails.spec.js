import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('#root')).toContainText('Swag Labs');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await expect(page.locator('#about_sidebar_link')).toContainText('About');
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.locator('[id="__next"]')).toContainText('Request a demo');
  await page.locator('a').filter({ hasText: 'Request a demoRequest a demo' }).getByRole('button').click();
  await expect(page.locator('#mktoForm_3124')).toContainText('Contact details');
});
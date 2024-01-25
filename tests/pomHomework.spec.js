import { test, expect } from '@playwright/test';

test('abc', async ({ page }) => {
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
    // login 

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('#item_0_title_link')).toContainText('Sauce Labs Bike Light');
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')).toBeVisible();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await expect(page.locator('#item_1_title_link')).toContainText('Sauce Labs Bolt T-Shirt');
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')).toContainText('Add to cart');
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    // adding backpack/bikelight/tsht

    await page.locator('//*[@id="shopping_cart_container"]/a').click();
    await page.locator('//*[@id="checkout"]').click();
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
    await page.locator('//*[@id="back-to-products"]').click();
    //checkingout lifecycle

    await expect(page.locator('[data-test="product_sort_container"]')).toBeVisible();
    await expect(page.locator('[data-test="product_sort_container"]')).toContainText('Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)');
    await page.getByText('Name (A to Z)Name (A to Z)').click();
    await page.locator('[data-test="product_sort_container"]').selectOption('lohi');
    await expect(page.locator('#contents_wrapper')).toContainText('$7.99');
    //sorting A-Z

    await page.locator('//*[@id="react-burger-menu-btn"]').click();
    await expect(page.locator('#logout_sidebar_link')).toContainText('Logout');
    await page.getByRole('link', { name: 'Logout' }).click();
    //logout




});


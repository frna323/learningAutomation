// const { default: test } = require('node:test');
const { test, expect } = require('@playwright/test');

test.describe('training', () => {

    test.beforeEach(async ({ page }) => {
        // Code here runs before each test in this describe block
        await page.goto('https://www.saucedemo.com/');
        await expect(page.locator("#root > div > div.login_logo")).toContainText('Swag Labs');
        await expect(page.locator('#login-button')).toContainText('Login');
        await page.locator('#user-name').click();
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').click();
        await page.locator('#password').fill('secret_sauce');
        await page.locator('[name=login-button]').click();
        await expect(page.locator('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label')).toContainText('Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        await expect(page.locator('//*[@id="inventory_container"]/div/div[2]/div[2]/div[1]')).toContainText('Sauce Labs Bike LightA red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
    });

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

    test('verify customer checkout lifecycle2', async ({ page }) => {
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

    test.afterEach(async ({ page }) => {
        // Code here runs after each test in this describe block
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        // await expect(page.locator('#root')).toContainText('Swag Labs');
        // await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
    });






});



















const { test, expect } = require('@playwright/test');
// Importing packages from Playwright library

//let page;

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    //login
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()

});



//  test('homepage test', async ({ page }) => {
// //     //home page test   

// // });

test.afterEach(async ({ page }) => {

    await page.locator('#react-burger-menu-btn').click()
    await page.locator('#logout_sidebar_link').click()


});


test('add product', async ({ page }) => {

    await page.locator('#add-to-cart-sauce-labs-backpack').click()
    await page.locator('#remove-sauce-labs-backpack').click()
    await page.locator('#shopping_cart_container').click()
    await page.locator('#checkout').click()
    await page.locator('#first-name').fill('farah')
    await page.locator('#last-name').fill('rashid')
    await page.locator('#postal-code').fill('12345')
    await page.locator('#continue').click()
    await page.locator('#finish').click()
    //addproduct

});



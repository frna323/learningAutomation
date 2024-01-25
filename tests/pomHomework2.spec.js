import { test, expect } from '@playwright/test';
const LoginActions = require('../POM/Utility/LoginActions');


//import { validateHeaderName } from 'http';


// test('reverse engineering', async ({ page }) => {

//     const LoginActions = new LoginActions(page);
//     LoginActions.gotoWebsiteFunction();
//     //LoginActions.ValidationFunction('#root', 'Swag Labs');
//     //LoginActions.ValidationFunction('[data-test="login-button"]', 'Login');
//     LoginActions.loginFunction();
//    // LoginActions.ValidationFunction('#item_4_title_link', 'Sauce Labs Backpack');
//    // LoginActions.ValidationFunction('[data-test="add-to-cart-sauce-labs-backpack"]', 'Add to cart');

//     // await expect(page.locator('#root')).toContainText('Swag Labs');
//     //await expect(page.locator()).toConabctainText();
//     // await page.locator('[data-test="username"]').click(); 
//     // await page.locator('[data-test="username"]').fill('standard_user');
//     // await page.locator('[data-test="password"]').click();
//     // await page.locator('[data-test="password"]').fill('secret_sauce');
//     // await page.locator('[data-test="login-button"]').click();
//     //await expect(page.locator('#item_4_title_link')).toContainText('Sauce Labs Backpack');
//     //await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toContainText('Add to cart');


//     // await page.locator(sauceLabsbackpackaddtocart).click();
//     // login.ValidationFunction('#item_0_title_link', 'Sauce Labs Bike Light');
//     // await expect(page.locator(sauceLabsbikelightaddtocart)).toBeVisible();
//     // await page.locator(sauceLabsbikelightaddtocart).click();
//     // await expect(page.locator('#item_1_title_link')).toContainText('Sauce Labs Bolt T-Shirt');
//     // await expect(page.locator(sauceLabstshirtaddtocart)).toContainText('Add to cart');
//     // await page.locator(sauceLabstshirtaddtocart).click();
//     // //await expect(page.locator('#item_0_title_link')).toContainText('Sauce Labs Bike Light');
//     // await page.locator('//*[@id="shopping_cart_container"]/a').click();
//     // await page.locator(chdckoutButtonLocator).click();
//     // await page.locator(firstNameLocator).click();
//     // await page.locator(firstNameLocator).fill(firstName);
//     // await pageLocator(lastNameLocator).click();
//     // await page.locator(lastNameLocator).fill(lastName);
//     // await page.locator(zipLocator).click();
//     // await page.locator(zipLocator).fill(postalCode);
//     // ValidationFunction(continueButtonLocator, 'Continue');
//     // await page.locator(continueButtonLocator).click();
//     // ValidationFunction(finishButtonLocator);
//     // //await expect(page.locator('[data-test="finish"]')).toBeVisible();
//     // await page.locator(finishButtonLocator).click();
//     // await expect(page.getByRole('img', { name: 'Pony Express' })).toBeVisible();
//     // await page.locator(backHomeButtonLocator).click();


//     // await expect(page.locator(filterFunnelLocator)).toBeVisible();
//     // ValidationFunction(filterFunnelLocator, 'Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)');
//     // //await expect(page.locator(filterFunnelLocator)).toContainText('Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)');
//     // await page.getByText('Name (A to Z)Name (A to Z)').click();
//     // await page.locator(filterFunnelLocator).selectOption('lohi');
//     // await expect(page.locator('#contents_wrapper')).toContainText('$7.99');
//     // //sorting A-Z

//     // await page.locator(hamburgerIcon).click();
//     // ValidationFunction(logoutButtonLocator, Logout);
//     // //await expect(page.locator(logoutButtonLocator)).toContainText('Logout');
//     // await page.getByRole('link', { name: 'Logout' }).click();
//     // //logout






// });

test('sample test', async ({ page }) => {
    const x = new LoginActions(page);
    await x.gotoWebsiteFunction();
    await x.ValidationFunction('#root', 'Swag Labs');
    await x.ValidationFunction('[data-test="login-button"]', 'Login');
    await x.loginFunction();
    await x.ValidationFunction('#item_4_title_link','Sauce Labs Backpack');
    await x.ValidationFunction('[data-test="add-to-cart-sauce-labs-backpack"]', 'Add to cart');
    



});







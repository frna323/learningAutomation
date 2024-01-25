const { test, expect } = require ('@playwright/test')


test('login Page', async ({ page }) => {

    await page.locator('#add-to-cart-sauce-labs-backpack').click()
    await page.locator('#remove-sauce-labs-backpack').click()
    await page.locator('#shopping_cart_container').click()

});
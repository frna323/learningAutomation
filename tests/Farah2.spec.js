import { test, expect } from '@playwright/test';
const FarahPageActions = require('../farahPOM/actions/farah');

let farahPageActions;


test('Verify user able to login', async ({ page }) => {

    farahPageActions = new FarahPageActions(page);
    // homepageActions = new HomepageActions(page);

    await farahPageActions.visitLoginPage();
    await farahPageActions.enterUsername();
    await farahPageActions.enterPassword();
    await farahPageActions.loginButton();
    await farahPageActions.backPackVerification();
    await farahPageActions.backpackAddtocart();
    await farahPageActions.checkoutCart();
    await farahPageActions.checkoutButton();
    await farahPageActions.enterFirstName();
    await farahPageActions.enterLastName();
    await farahPageActions.enterZipcode();
    await farahPageActions.continueButton();
    await farahPageActions.finishButton();
    await farahPageActions.backHomeButton();
    await farahPageActions.hamburgerIcon();
    await farahPageActions.logoutButton();
    await farahPageActions.logoutPageVerification();

});











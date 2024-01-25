import { test, expect } from '@playwright/test';
// import { expect} from '@playwright/test';
import FarahPageActions from '../farahPOM/actions/farah';
// const FarahPageActions = require('../farahPOM/actions/farah')

// let farahPageActions;

//const util = require('../farahPOM/Utilities');

test('Farah first test', async ({ page }) => {

    farahPageActions = new FarahPageActions(page);


    await farahPageActions.visitLoginPage();

    // await page.goto('https://www.saucedemo.com/v1/inventory.html');



});
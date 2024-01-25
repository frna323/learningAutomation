//Importing values from pageLocator and LoginPageDataValue files
const { Page } = require('playwright');
import { expect } from '@playwright/test';
const LoginPageDataValueVar = require('../Utility/LoginPageDataValue');
const pageLocatorVar = require('../Utility/pageLocator');


class LoginActions {

    constructor(page) {

        this.page = page;

    }

    async gotoWebsiteFunction() {

        await this.page.goto(LoginPageDataValueVar.gotoWebsiteURL);

    }

    async loginFunction() {

        await this.page.locator(pageLocatorVar.userNameLocator).fill(LoginPageDataValueVar.loginUsername);
        await this.page.locator(pageLocatorVar.passwordLocator).fill(LoginPageDataValueVar.loginPassword);
        await this.page.locator(pageLocatorVar.loginButtonLocator).click;

    }

    //Validation Function using toContainText method.
    async ValidationFunction(locatorVariable, dataValue) {
        
        await expect(this.page.locator(locatorVariable)).toContainText(dataValue);

    }


}

module.exports = LoginActions;
import { test } from ('@playwright/test'); 
const dataComingFromDataFile = require('../locators/data'); 

class Utilities {

    constructor(page) {

        this.page = page;

    }

    async goToWebsite() {

        await this.page.goto(dataComingFromDataFile.weburl);
    }

    async signIn() {

        await this.page.locator(dataComingFromDataFile.userNameLocator);
        await this.page.locator(dataComingFromDataFile.passwordLocator);
        await this.page.locator(dataComingFromDataFile.loginButtonLocator).click();

    }


}

module.exports = Utilities;

//Actions will be placed in this file. Functions, class etc. In this file, we will build functions for repetative acitons that is performed by Playwrigght
//Playwright calling library
//Calling the object from data file.
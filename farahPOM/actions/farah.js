const { page, expect } = require('@playwright/test');
import FarahPageLocators from '../locators/farah';

class FarahPageActions {

    constructor( ) {
        this.page = page;
    }

    async visitLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async validateLoginPage() {
        await expect(this.page.locator(FarahPageLocators.login)).toContainText('Login');

    }
    async enterUsername() {

        const username = await this.page.locator(FarahPageLocators.username);
        await username.click();
        await username.fill('standard_user');
    }
    async enterPassword() {
        const password = await this.page.locator(FarahPageLocators.password);
        await password.click();
        await password.fill('secret_sauce');
    }
    async loginButton() {
        await this.page.locator(FarahPageLocators.login).click();
    }

    async backPackVerification() {
        await expect(this.page.locator(FarahPageLocators.backpackVerification)).toContainText('Sauce Labs Backpack');
    }

    async backpackAddtocart() {
        await this.page.locator(FarahPageLocators.backpackAddtocart).click();
    }

    async checkoutCart() {
        await this.page.locator(FarahPageLocators.checkoutCart).click();
    }

    async checkoutButton() {
        await this.page.locator(FarahPageLocators.checkoutButton).click();
    }
    async enterFirstName() {
        const firstname = await this.page.locator(FarahPageLocators.enterFirstName);
        await firstname.click();
        await firstname.fill('farah');
    }

    async enterLastName() {
        const lastName = await this.page.locator(FarahPageLocators.enterLastName);
        await lastName.click();
        await lastName.fill('ras');
    }

    async enterZipcode() {
        const zipcode = await this.page.locator(FarahPageLocators.enterZipcode);
        await zipcode.click();
        await zipcode.fill('12345');
    }

    async continueButton() {
        await this.page.locator(FarahPageLocators.continueButton).click();
    }
    async finishButton() {
        await this.page.locator(FarahPageLocators.finishButton).click();
    }

    async backHomeButton() {
        await this.page.locator(FarahPageLocators.backHomeButton).click();
    }
    async hamburgerIcon() {
        await this.page.locator(FarahPageLocators.hamburgerIcon).click();
    }

    async logoutButton() {
        await this.page.locator(FarahPageLocators.logoutButton).click();
    }
    async logoutPageVerification() {
        await expect(this.page.locator(FarahPageLocators.logoutPageVerification)).toContainText('Swag Labs');
    }
}

module.exports = FarahPageActions;


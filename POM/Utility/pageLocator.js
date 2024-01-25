

// Assigning all locator values in variables

const pageLocator = {

    userNameLocator: '#user-name',
    passwordLocator: '#password',

    loginButtonLocator: '#login-button',
    logoutButtonLocator: '#logout_sidebar_link',

    sauceLabsbackpackaddtocart: '[data-test="add-to-cart-sauce-labs-backpack"]',
    sauceLabsbikelightaddtocart: '[data-test="add-to-cart-sauce-labs-bike-light"]',
    sauceLabstshirtaddtocart: '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',

    firstNameLocator: '//*[@id="first-name"]',
    lastNameLocator: '//*[@id="last-name"]',
    zipLocator: '//*[@id="postal-code"]',


    chdckoutButtonLocator: '//*[@id="checkout"]',
    continueButtonLocator: '[data-test="continue"]',
    finishButtonLocator: '[data-test="finish"]',
    hamburgerIcon: '//*[@id="react-burger-menu-btn"]',
    backHomeButtonLocator: '//*[@id="back-to-products"]',

    filterFunnelLocator: '[data-test="product_sort_container"]',
    lowToHighLocator: '[data-test="product_sort_container"]',



}

module.exports = pageLocator;

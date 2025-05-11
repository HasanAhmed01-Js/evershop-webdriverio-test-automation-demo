class PurchaseTaskTwoObject {
    get openHumburgerIcon() {
        return $("#react-burger-menu-btn");
    }
    get resetStateButton() {
        return $("#reset_sidebar_link");
    }
    get productOne() {
        return $("#add-to-cart-sauce-labs-backpack");
    }
    get productTwo() {
        return $("#add-to-cart-sauce-labs-bike-light");
    }
    get productThree() {
        return $("#add-to-cart-sauce-labs-bolt-t-shirt");
    }
    get addToCart() {
        return $(".shopping_cart_link");
    }

    get checkoutButton() {
        return $("#checkout");
    }

    get firstName() {
        return $("#first-name");
    }
    get lastName() {
        return $("#last-name");
    }
    get postCode() {
        return $("#postal-code");
    }
    get continueButtonToPayment() {
        return $(`//input[@type="submit"]`);
    }

    get productfirstName() {
        return $("//div[normalize-space()='Sauce Labs Backpack']");
    }
    get productSecondName() {
        return $("//div[normalize-space()='Sauce Labs Bike Light']");
    }
    get productThirdName() {
        return $("//div[normalize-space()='Sauce Labs Bolt T-Shirt']");
    }

    get firstProductPrice() {
        return $("//div[@class='inventory_item_price'][normalize-space()='$29.99']");
    }
    get secondProductPrice() {
        return $("//div[@class='inventory_item_price'][normalize-space()='$9.99']");
    }
    get thirdProductPrice() {
        return $("//div[@class='inventory_item_price'][normalize-space()='$15.99']");
    }

    get totalPrice() {
        return $("//div[@class='summary_total_label']");
    }

    get finishButton() {
        return $("//button[@id='finish']");
    }

    get confirmationText() {
        return $(".complete-header");
    }

    get logoutButton() {
        return $("#logout_sidebar_link");
    }
}

module.exports = new PurchaseTaskTwoObject();
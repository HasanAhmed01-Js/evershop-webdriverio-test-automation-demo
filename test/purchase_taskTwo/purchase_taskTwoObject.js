class PurchaseTaskTwoObject {
    get userNameField() {
        return $("#user-name");
    }
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
        return $("#postal-code");
    }

    get productOneName() {
        return $("a[id='item_4_title_link'] div[class='inventory_item_name']");
    }
    // get productTwoName() {
    //     return $("a[id='item_0_title_link'] div[class='inventory_item_name']");
    // }
    // get productThreeName() {
    //     return $("a[id='item_0_title_link'] div[class='inventory_item_name']");
    // }

    get finishButton() {
        return $("//button[@id='finish']");
    }

    get confirmationText() {
        return $(".complete-header");
    }


}

module.exports = new PurchaseTaskTwoObject();
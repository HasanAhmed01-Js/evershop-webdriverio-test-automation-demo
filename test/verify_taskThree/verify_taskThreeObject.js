class verifyTaskThreeObject {
    get filterValue() {
        return $("//select[@class='product_sort_container']/option[@value='za']");
    }
    get firstProductAddToCart() {
        return $("button[id='add-to-cart-test.allthethings()-t-shirt-(red)']");
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
}

module.exports = new verifyTaskThreeObject();
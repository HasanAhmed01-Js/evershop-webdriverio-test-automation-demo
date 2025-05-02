const productObject = require("./productObject");

class productAction {
    async selectProduct(productName) {
        await productObject.productFromList(productName).click();
    }
    async selectVariation(size, color) {
        await productObject.productVariation(size).click();
        await browser.pause(5000);
        await productObject.productVariation(color).click();
        await browser.pause(5000);
    }
    async enterProductQty(qty) {
        await productObject.productQty.setValue(qty);
    }
    async clickAddToCartButton() {
        await productObject.buttonAddToCart.click();
    }
}

module.exports = new productAction();
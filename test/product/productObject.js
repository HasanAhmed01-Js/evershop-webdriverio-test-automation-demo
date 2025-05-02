class productObject {
    productFromList(productName) {
        return $(`//span[text()='${productName}'][1]`);
        // return $(`//span[contains(text(),'${productName}')])[2]`);


    }
    productVariation(variation) {
        // return $(`//a[@href='#' and text()='${variation}']`);
        return $(`//a[normalize-space()='${variation}']`);

    }

    get productQty() {
        return $(`//input[@placeholder='Qty']`);
    }

    get buttonAddToCart() {
        // return $("(//button/span[normalize-space()='ADD TO CART'])");
        return $("//button[@type='button']");
    }
}

module.exports = new productObject();
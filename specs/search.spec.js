const searchAction = require("../test/search/searchAction");
const productAction = require('../test/product/productAction');
const productName = "Nike air zoom pegasus 35";

const size = 'L';
const color = 'Black';
const qty = 2;

describe("EverShop Search test automation", () => {
    it("Successfully search a valid product", async () => {
        await searchAction.search(productName);
        await browser.pause(5000);
    });

    it("Sucessfully add a product into the cart", async () => {
        await productAction.selectProduct(productName);
        await productAction.selectVariation(size, color);
        await browser.pause(5000);
        await productAction.enterProductQty(qty);
        await browser.pause(10000);
        await productAction.clickAddToCartButton();
    });
})


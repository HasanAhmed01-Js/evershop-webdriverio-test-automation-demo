const productAction = require("./../test/product/productAction");
// const productName = 'Nike air zoom pegasus 35';

const size = 'L';
const color = 'Black';
const qty = 2;

describe("Demo QA - Product test suit", () => {
    it("Sucessfully add a product into the cart", async () => {
        await browser.url("https://demo.evershop.io/men/nike-air-zoom-pegasus-35-146");
        await productAction.selectVariation(size, color);
        await productAction.enterProductQty(qty);
        await productAction.clickAddToCartButton();
    });
});

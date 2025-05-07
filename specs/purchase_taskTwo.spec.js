const PurchaseTaskTwoAction = require("../test/purchase_taskTwo/purchase_taskTwoAction");
const secondUsername = "standard_user";
const password = "secret_sauce";
const firstName = "Hasan";
const lastName = "Ahmed";
const postCode = 3100;

describe("Task Two : Product Purchase Journey", () => {
    it("Login with standard_user ", async () => {
        await PurchaseTaskTwoAction.login(secondUsername, password);
    });
    it("Add 3 products to cart", async () => {
        await PurchaseTaskTwoAction.addToCart();
    });
    it("Checkout & Form", async () => {
        await PurchaseTaskTwoAction.checkOutPage(firstName, lastName, postCode);
    });
    xit("Verify Products", async () => {
        await PurchaseTaskTwoAction.verifyProduct();
    });

})
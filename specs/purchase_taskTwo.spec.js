const LoginTaskOneAction = require("../test/login_taskOne/login_taskOne_action");
const PurchaseTaskTwoAction = require("../test/purchase_taskTwo/purchase_taskTwoAction");
const secondUsername = "standard_user";
const password = "secret_sauce";
const firstName = "Hasan";
const lastName = "Ahmed";
const postCode = 3100;

describe("Task Two : 3 Products Purchase Journey, Verify Products Name & Price", () => {
    it("Login with standard_user ", async () => {
        await LoginTaskOneAction.login(secondUsername, password);
    });
    it("Add 3 products to cart", async () => {
        await PurchaseTaskTwoAction.addToCart();
    });
    it("Checkout & Form", async () => {
        await PurchaseTaskTwoAction.checkOutPage(firstName, lastName, postCode);
    });
    it("Verify Products Name", async () => {
        await PurchaseTaskTwoAction.verifyProductName();
    });
    it("Verify Products Price", async () => {
        await PurchaseTaskTwoAction.verifyProductPrice();
    });
    it("Verify Confirmation Message & Logout", async () => {
        await PurchaseTaskTwoAction.getConfirmation();
    });
})
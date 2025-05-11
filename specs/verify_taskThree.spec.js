const LoginTaskOneAction = require("../test/login_taskOne/login_taskOne_action");
const PurchaseTaskTwoAction = require("../test/purchase_taskTwo/purchase_taskTwoAction");
const verifyTaskThreeAction = require("../test/verify_taskThree/verify_taskThreeAction");
const thirdUsername = "performance_glitch_user";
const password = "secret_sauce";
const firstName = "Hasan";
const lastName = "Ahmed";
const postCode = 3100;

describe("Task Three : Verify 1 Product Purchase Journey By Filtering", () => {
    it("Login with performance_glitch_user and reset the App State", async () => {
        await LoginTaskOneAction.login(thirdUsername, password);
    });
    it("Add to Cart Product", async () => {
        await verifyTaskThreeAction.addToCart();
    })
    it("Checkout & Form", async () => {
        await PurchaseTaskTwoAction.checkOutPage(firstName, lastName, postCode);
    })
    it("Verify Products Name", async () => {
        await verifyTaskThreeAction.verifyProductName();
    });
    it("Verify Products Price", async () => {
        await verifyTaskThreeAction.verifyProductPrice();
    });
    it("Verify Confirmation Message & Logout", async () => {
        await PurchaseTaskTwoAction.getConfirmation();
    });
})
const verifyTaskThreeAction = require("../test/verify_taskThree/verify_taskThreeAction");
const thirdUsername = "performance_glitch_user";
const password = "secret_sauce";
const firstName = "Hasan";
const lastName = "Ahmed";
const postCode = 3100;

describe("Task Three : Verify Single Product Purchase Journey By Filtering", () => {
    it("Login with performance_glitch_user and reset the App State", async () => {
        await verifyTaskThreeAction.login(thirdUsername, password);
    });
    it("Add to Cart Product", async () => {
        await verifyTaskThreeAction.addToCart();
    })
    it("Checkout & Form", async () => {
        await verifyTaskThreeAction.checkOutPage(firstName, lastName, postCode);
    })

})
const LoginTaskOneAction = require("../test/login_taskOne/login_taskOne_action");
const LoginTaskOneObject = require("../test/login_taskOne/login_taskOne_object");
const firstUsername = "locked_out_user";
const password = "secret_sauce";

describe("Task One : Login in wrong login credential", () => {
    it("Verify the error message", async () => {
        await LoginTaskOneAction.login(firstUsername, password);
        await browser.pause(5000);
    });
})
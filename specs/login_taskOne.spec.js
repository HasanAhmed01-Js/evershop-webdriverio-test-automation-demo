const LoginTaskOneAction = require("../test/login_taskOne/login_taskOne_action");
const firstUsername = "locked_out_user";
const password = "secret_sauce";


describe("Task One : Login with locked_out_user and verify the error message", () => {
    it("Login with locked_out_user", async () => {
        await LoginTaskOneAction.login(firstUsername, password);
    });
    it("Verify the error message", async () => {
        await LoginTaskOneAction.verifyMessage();
    });
})
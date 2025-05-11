const LoginTaskOneObject = require("../login_taskOne/login_taskOne_object");
const expectedMessage = "Epic sadface: Sorry, this user has been locked out.";

class LoginTaskOneAction {
    async enterUsername(firstUsername) {
        await LoginTaskOneObject.userNameField.setValue(firstUsername);
        await browser.pause(5000);
    }

    async enterPassword(password) {
        await LoginTaskOneObject.getPasswordField.setValue(password);
        await browser.pause(5000);
    }

    async clickLoginButton() {
        await LoginTaskOneObject.loginButton.click();
    }
    async errorMessage() {
        const actualMessage = await LoginTaskOneObject.getErrorMessage.getText();
        expect(actualMessage).toEqual(expectedMessage);
    }

    async login(firstUsername, password) {
        await this.enterUsername(firstUsername);
        await this.enterPassword(password);
        await this.clickLoginButton();

    }
    async verifyMessage() {
        await this.errorMessage();
        await browser.pause(5000);
    }

}


module.exports = new LoginTaskOneAction();
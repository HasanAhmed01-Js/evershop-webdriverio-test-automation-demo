const LoginTaskOneObject = require("../login_taskOne/login_taskOne_object");
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

    async login(firstUsername, password) {
        await this.enterUsername(firstUsername);
        await this.enterPassword(password);
        await this.clickLoginButton();
        await expect(LoginTaskOneObject.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.')
    }

}


module.exports = new LoginTaskOneAction();
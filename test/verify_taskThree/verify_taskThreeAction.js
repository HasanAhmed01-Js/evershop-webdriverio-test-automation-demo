const LoginTaskOneObject = require("../login_taskOne/login_taskOne_object");
const PurchaseTaskTwoObject = require("../purchase_taskTwo/purchase_taskTwoObject");
const verifyTaskThreeObject = require("../verify_taskThree/verify_taskThreeObject");
class verifyTaskThreeAction {
    async enterUsername(thirdUsername) {
        await LoginTaskOneObject.userNameField.setValue(thirdUsername);
        await browser.pause(5000);
    }

    async enterPassword(password) {
        await LoginTaskOneObject.getPasswordField.setValue(password);
        await browser.pause(5000);
    }

    async clickLoginButton() {
        await LoginTaskOneObject.loginButton.click();
    }
    async login(thirdUsername, password) {
        await this.enterUsername(thirdUsername);
        await this.enterPassword(password);
        await this.clickLoginButton();
        await PurchaseTaskTwoObject.openHumburgerIcon.click();
        await browser.pause(2000);
        await PurchaseTaskTwoObject.resetStateButton.click();
        await browser.pause(2000);

    }
    async addToCart() {
        await verifyTaskThreeObject.filterValue.click();
        await browser.pause(2000);
        await verifyTaskThreeObject.firstProductAddToCart.click();
        await browser.pause(2000);
        await verifyTaskThreeObject.addToCart.click();
    }
    async checkOutPage(firstName, lastName, postalCode) {
        await verifyTaskThreeObject.checkoutButton.click();
        await browser.pause(2000);
        await verifyTaskThreeObject.firstName.setValue(firstName);
        await browser.pause(2000);
        await verifyTaskThreeObject.lastName.setValue(lastName);
        await browser.pause(2000);
        await verifyTaskThreeObject.postCode.setValue(postalCode);
        await browser.pause(2000);
        await verifyTaskThreeObject.continueButtonToPayment.click()
    }


}

module.exports = new verifyTaskThreeAction();
const LoginTaskOneObject = require("../login_taskOne/login_taskOne_object");
const purchase_taskTwoObject = require("../purchase_taskTwo/purchase_taskTwoObject");
const PurchaseTaskTwoObject = require("../purchase_taskTwo/purchase_taskTwoObject");

class PurchaseTaskTwoAction {
    async enterUsername(secondUsername) {
        await LoginTaskOneObject.userNameField.setValue(secondUsername);
        await browser.pause(5000);
    }

    async enterPassword(password) {
        await LoginTaskOneObject.getPasswordField.setValue(password);
        await browser.pause(5000);
    }

    async clickLoginButton() {
        await LoginTaskOneObject.loginButton.click();
    }

    async login(secondUsername, password) {
        await this.enterUsername(secondUsername);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async addToCart() {
        await PurchaseTaskTwoObject.openHumburgerIcon.click();
        await browser.pause(2000);
        await PurchaseTaskTwoObject.resetStateButton.click();
        await browser.pause(2000);
        await PurchaseTaskTwoObject.productOne.click();
        await browser.pause(2000);
        await PurchaseTaskTwoObject.productTwo.click();
        await browser.pause(2000);
        await PurchaseTaskTwoObject.productThree.click();
        await browser.pause(2000);
        await PurchaseTaskTwoObject.addToCart.click();
    }

    async checkOutPage(firstName, lastName, postalCode) {
        await PurchaseTaskTwoObject.checkoutButton.click();
        await browser.pause(2000);
        await PurchaseTaskTwoObject.firstName.setValue(firstName);
        await browser.pause(2000);
        await PurchaseTaskTwoObject.lastName.setValue(lastName);
        await browser.pause(2000);
        await PurchaseTaskTwoObject.postCode.setValue(postalCode);
        await browser.pause(2000);
        await PurchaseTaskTwoObject.continueButtonToPayment.click();
        await browser.pause(2000);
    }

    async verifyProduct() {
        await PurchaseTaskTwoObject.finishButton.click();
        await browser.pause(2000);
        await expect(purchase_taskTwoObject.confirmationText).toHaveText('Thank you for your order!')
        await browser.pause(2000);
    }
}
module.exports = new PurchaseTaskTwoAction();
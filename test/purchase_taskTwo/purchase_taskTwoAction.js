const PurchaseTaskTwoObject = require("../purchase_taskTwo/purchase_taskTwoObject");
const expectedFirstProductName = "Sauce Labs Backpack";
const expectedSecondProductName = "Sauce Labs Bike Light";
const expectedThirdProductName = "Sauce Labs Bolt T-Shirt"
const expectedFirstProductPrice = 29.99;
const expectedSecondProductPrice = 9.99;
const expectedThirdProductPrice = 15.99;
const expectedConfirmationMessage = "Thank you for your order!";

class PurchaseTaskTwoAction {
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

    async verifyProductName() {
        //Getting First Product's Name and Verify
        const actualFirstProductName = await PurchaseTaskTwoObject.productfirstName.getText();
        expect(actualFirstProductName).toEqual(expectedFirstProductName);

        //Getting Second Product's Name and Verify
        const actualSecondProductName = await PurchaseTaskTwoObject.productSecondName.getText();
        expect(actualSecondProductName).toEqual(expectedSecondProductName);

        //Getting Third Product's Name and Verify
        const actualThirdProductPrice = await PurchaseTaskTwoObject.productThirdName.getText();
        expect(actualThirdProductPrice).toEqual(expectedThirdProductName);
    }

    async verifyProductPrice() {
        //Getting FIRST Product Price, verify and convert to Float
        const actualFirstProductPrice = await PurchaseTaskTwoObject.firstProductPrice.getText();
        let firstNumber = parseFloat(actualFirstProductPrice.split('$')[1]);
        expect(firstNumber).toEqual(expectedFirstProductPrice);

        //Getting SECOND Product Price, verify and convert to Float
        const actualSecondProductPrice = await PurchaseTaskTwoObject.secondProductPrice.getText();
        let secondNumber = parseFloat(actualSecondProductPrice.split('$')[1]);
        expect(secondNumber).toEqual(expectedSecondProductPrice);

        //Getting THIRD Product Price, verify and convert to Float
        const actualThirdProductPrice = await PurchaseTaskTwoObject.thirdProductPrice.getText();
        let thirdNumber = parseFloat(actualThirdProductPrice.split('$')[1]);
        expect(thirdNumber).toEqual(expectedThirdProductPrice);


        //Finally Calculating TOTAL PRICE & verify
        const totalPrice = (firstNumber + secondNumber + thirdNumber) + 4.48;
        const getTotalPrice = await PurchaseTaskTwoObject.totalPrice.getText();
        let actualTotalPrice = parseFloat(getTotalPrice.split("$")[1]);
        expect(actualTotalPrice).toEqual(totalPrice);
    }

    async getConfirmation() {
        await PurchaseTaskTwoObject.finishButton.click();
        await browser.pause(2000);
        const actualConfirmationMessage = await PurchaseTaskTwoObject.confirmationText.getText()
        expect(actualConfirmationMessage).toEqual(expectedConfirmationMessage);
        await browser.pause(1000);
        await PurchaseTaskTwoObject.openHumburgerIcon.click();
        await browser.pause(1000);
        await PurchaseTaskTwoObject.resetStateButton.click();
        await browser.pause(1000);
        await PurchaseTaskTwoObject.logoutButton.click();
    }
}
module.exports = new PurchaseTaskTwoAction();

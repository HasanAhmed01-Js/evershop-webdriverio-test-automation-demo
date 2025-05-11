const PurchaseTaskTwoObject = require("../purchase_taskTwo/purchase_taskTwoObject");
const verifyTaskThreeObject = require("../verify_taskThree/verify_taskThreeObject");
const expectedFirstProductName = "Test.allTheThings() T-Shirt (Red)";
const expectedFirstProductPrice = 15.99;

class verifyTaskThreeAction {
    async addToCart() {
        await PurchaseTaskTwoObject.openHumburgerIcon.click();
        await browser.pause(2000);
        await PurchaseTaskTwoObject.resetStateButton.click();
        await browser.pause(2000);
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
    async verifyProductName() {
        //Getting First Product's Name and Verify
        const actualFirstProductName = await verifyTaskThreeObject.productfirstName.getText();
        expect(actualFirstProductName).toEqual(expectedFirstProductName);
    }
    async verifyProductPrice() {
        //Getting FIRST Product Price, verify and convert to Float
        const actualFirstProductPrice = await verifyTaskThreeObject.firstProductPrice.getText();
        let firstNumber = parseFloat(actualFirstProductPrice.split('$')[1]);
        expect(firstNumber).toEqual(expectedFirstProductPrice);

        //Finally Calculating TOTAL PRICE & verify
        const totalPrice = (firstNumber) + 1.28;
        const getTotalPrice = await verifyTaskThreeObject.totalPrice.getText();
        let actualTotalPrice = parseFloat(getTotalPrice.split("$")[1]);
        expect(actualTotalPrice).toEqual(totalPrice);
    }
}

module.exports = new verifyTaskThreeAction();
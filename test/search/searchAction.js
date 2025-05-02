const searchObject = require("./searchObject")
class searchAction {
    async clickSearchIcon() {
        await searchObject.clickIcon.click();
    }
    async enterProductName(productName) {
        await searchObject.clickInputField.setValue(productName);
    }

    async search(productName) {
        await this.clickSearchIcon();
        await this.enterProductName(productName);
        await browser.keys("Enter");
    }
}

module.exports = new searchAction();
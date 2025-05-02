class searchObject {
    get clickIcon() {
        return $("//a[@class='search-icon']");
    }

    get clickInputField() {
        return $("//input[@placeholder='Search']");
    }
}

module.exports = new searchObject();
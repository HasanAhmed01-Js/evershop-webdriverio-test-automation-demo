class verifyTaskThreeObject {
    get filterValue() {
        return $("//select[@class='product_sort_container']/option[@value='za']");
    }
    get firstProductAddToCart() {
        return $("button[id='add-to-cart-test.allthethings()-t-shirt-(red)']");
    }
    get addToCart() {
        return $(".shopping_cart_link");
    }
    get productfirstName() {
        return $("//div[@class='inventory_item_name']");
    }
    get firstProductPrice() {
        return $("//div[@class='inventory_item_price']");
    }
    get totalPrice() {
        return $("//div[@class='summary_total_label']");
    }

}

module.exports = new verifyTaskThreeObject();
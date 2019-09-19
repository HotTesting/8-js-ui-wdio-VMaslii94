export class Checkout {
    //  shoppingCart = new shoppingCart(); //TypeScript
    // JS
    constructor() {
        this.shoppingCart = new shoppingCart();
        this.customerDetails = new customerDetails();
    }
    get noItemsLabel() {
        return $(".cart.wrapper em");
    }
    open() {
        browser.url("/checkout");
        browser.pause(3000);
    }
    ifNoItemsInCart() {
        if (this.noItemsLabel.isDisplayed()) {
            return this.noItemsLabel
                .getText()
                .includes("There are no items in your cart.");
        }
        else {
            return false;
        }
    }
    ifItemsInCart() {
        return !this.ifNoItemsInCart();
    }
    confirmOrder() {
        $('.btn[name="confirm_order"]').click();
    }
}
//Component
class shoppingCart {
    get container() {
        return $("#box-checkout-cart");
    }
    get items() {
        return $$("table.items tr.item").map(item => {
            return new Item(item);
        });
    }
}
class Item {
    constructor(itemContainer) {
        this.container = itemContainer;
    }
    getProductName() {
        return this.container.getAttribute("data-name");
    }
    getProductPrice() {
        return parseFloat(this.container.getAttribute("data-price"));
    }
    getProductQuantity() {
        return this.container.getAttribute("data-quantity");
    }
}
//  getAllFromCart(){
//    return this.getProductName() + this.getProductPrice();
//  }
//}
class customerDetails {
    // private get container() {
    //   return $("#box-checkout-customer.box");
    // }
    // container1;
    // constructor(itemContainer) {
    //   this.container1 = itemContainer;
    // }
    setCompanyName(name) {
        $('input[name="company"]').setValue(name);
    }
    setTax(name) {
        $('input[name="tax_id"]').setValue(name);
    }
    setFirstName(name) {
        $('input[name="firstname"]').setValue(name);
    }
    setLastName(name) {
        $('input[name="lastname"]').setValue(name);
    }
    setAddress1(name) {
        $('input[name="address1"]').setValue(name);
    }
    setAddress2(name) {
        $('input[name="address2"]').setValue(name);
    }
    setPostCode(name) {
        $('input[name="postcode"]').setValue(name);
    }
    setCity(name) {
        $('input[name="city"]').setValue(name);
    }
    setEmail(name) {
        $('input[name="email"]').setValue(name);
    }
    setPhone(name) {
        $('input[name="phone"]').setValue(name);
    }
    populateAllData() {
        this.setCompanyName("myCompany");
        this.setTax(444);
        this.setFirstName("Vlad");
        this.setLastName("Maslii");
        this.setAddress1("myAdress1");
        this.setAddress2("myAdress2");
        this.setCity("Kiev");
        this.setPostCode(16500);
        this.setPhone(380931111111);
        this.setEmail("Test@gmail.com");
    }
    saveChanges() {
        $('.btn[name="save_customer_details"]').click();
    }
}

import { threadId } from "worker_threads";
import { CustomerModel } from '../dataModel/customer';

export class Checkout {
  shoppingCart: ShoppingCart = new ShoppingCart();
  customerDetails: CustomerDetails = new CustomerDetails();

  private get noItemsLabel() {
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
    } else {
      return false;
    }
  }
  ifItemsInCart() {
    return !this.ifNoItemsInCart();
  }
  
  confirmOrder(){
    $('.btn[name="confirm_order"]').click();
  }

}

//Component
class ShoppingCart {
  private get container() {
    return $("#box-checkout-cart");
  }

  public get items() {
    return $$("table.items tr.item").map(item => {
      return new Item(item);
    });


    
  }
}
class Item {
  container;
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

 getSum(price,quantity){
   return price*quantity
 }
 deleteAllItems(){
  $('button .btn btn-danger,[name="remove_cart_item"]').click();
  
 }


 }

//  getAllFromCart(){
//    return this.getProductName() + this.getProductPrice();
//  }



//}

 class CustomerDetails {
  // private get container() {
  //   return $("#box-checkout-customer.box");
  // }

  
  // container1;
  // constructor(itemContainer) {
  //   this.container1 = itemContainer;
  // }
  setCompanyName(name: string) {
    $('input[name="company"]').setValue(name);
  }
  setTax(name: string) {
    $('input[name="tax_id"]').setValue(name);
  }
  setFirstName(name: string) {
    $('input[name="firstname"]').setValue(name);
  }
  setLastName(name: string) {
    $('input[name="lastname"]').setValue(name);
  }
  setAddress1(name: string) {
    $('input[name="address1"]').clearValue();
    $('input[name="address1"]').setValue(name);
  }
  setAddress2(name: string) {
    $('input[name="address2"]').clearValue();
    $('input[name="address2"]').setValue(name);
  }
  setPostCode(name: string) {
    $('input[name="postcode"]').setValue(name);
  }
  setCity(name: string) {
    $('input[name="city"]').setValue(name);
  }
  setEmail(name: string) {
    $('input[name="email"]').clearValue();
    $('input[name="email"]').setValue(name);
  }
  setPhone(name: string) {
    $('input[name="phone"]').clearValue();
    $('input[name="phone"]').setValue(name);
  }

  setCustomerDetails(customerModel: CustomerModel) {
    this.setCompanyName(customerModel.company);
    this.setTax(customerModel.tax);
    this.setFirstName(customerModel.firstName);
    this.setLastName(customerModel.lastName);
    this.setAddress1(customerModel.address1);
    this.setAddress2(customerModel.address2);
    this.setCity(customerModel.city);
    this.setPostCode(customerModel.postCode);
    this.setPhone(customerModel.phone);
    this.setEmail(customerModel.email);
  }

  saveChanges(){
    $('.btn[name="save_customer_details"]').click();
  }

}



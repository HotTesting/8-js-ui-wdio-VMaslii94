import { Checkout } from "../pageObject/checkout";
//import { App } from '../../pageObjects/application';
import { expect } from "chai";
import { ProductDetails } from "../pageObject/productDetails";
import { CustomerModel, ValidCustomerModel } from '../dataModel/customer';
/**
 - verify prices in cart, and after order created
 - verify order is successful
 - Prefer css selectors 
 - Try to implement as much tests as you can
 - Do not overload tests with logic, be simple
 - You SHOULD use PageObjects for this tests
 - Use mocha before/after hooks to reuse pre/post conditions
 - Use ChaiJS (expect, should or assert style) to make assertions
 */

// Each implemented test gives you 15 points
describe("Order", function() {
  it("is successful for regular item", function() {
    // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/red-duck-p-3
    // Just regular duck without discounts, parameters, or sold our
    let product = new ProductDetails();
    product.open("/rubber-ducks-c-1/red-duck-p-3");

    const productName = product.getProductName();
    const productPrice = product.getProductPrice();

    // console.log("NNN"+productName+productPrice);

    product.addToCart();
    //browser.pause(5000);
    let checkout = new Checkout();
    checkout.open();
    //browser.pause(5000);
    expect(checkout.ifItemsInCart()).to.be.true;

    let productNamefromCart = checkout.shoppingCart.items[0].getProductName();

    let productPricefromCart = checkout.shoppingCart.items[0].getProductPrice();

    // console.log("TTT"+" name: "+productNamefromCart+" price:"+productPricefromCart+" quantity:"+productQuantityfromCart);

    expect(productNamefromCart, "Name difference").eql(productName);

    expect(productPricefromCart, "Price difference").eql(productPrice);

    checkout.customerDetails.populateAllData();
    checkout.customerDetails.saveChanges();
    browser.pause(2000);
    checkout.confirmOrder();
    browser.pause(2000);
    let curUrl = browser.getUrl();
    expect(curUrl).include("/order_success");
    //browser.pause(12000);
  });

  it("is failed when email missing for regular item", function() {
    // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/red-duck-p-3
    // Just regular duck without discounts, parameters, or sold our
    let product = new ProductDetails();
    product.open("/rubber-ducks-c-1/red-duck-p-3");

    const productName = product.getProductName();
    const productPrice = product.getProductPrice();

    // console.log("NNN"+productName+productPrice);

    product.addToCart();
    //browser.pause(5000);
    let checkout = new Checkout();
    checkout.open();
    //browser.pause(5000);
    expect(checkout.ifItemsInCart()).to.be.true;

    let productNamefromCart = checkout.shoppingCart.items[0].getProductName();

    let productPricefromCart = checkout.shoppingCart.items[0].getProductPrice();

    // console.log("TTT"+" name: "+productNamefromCart+" price:"+productPricefromCart+" quantity:"+productQuantityfromCart);

    expect(productNamefromCart, "Name difference").eql(productName);

    expect(productPricefromCart, "Price difference").eql(productPrice);

    const validCustomer = new ValidCustomerModel();
    checkout.customerDetails.setCustomerDetails(validCustomer);
    checkout.customerDetails.saveChanges();
    browser.pause(2000);
    checkout.confirmOrder();
    browser.pause(2000);
    let curUrl = browser.getUrl();
    expect(curUrl).include("/order_success");
    //browser.pause(12000);
  });

  it("is successful for discounted item", function() {
    // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/blue-duck-p-4
    // this duck always has discount 20%
    let product = new ProductDetails();
    let checkout = new Checkout();
    product.open("/rubber-ducks-c-1/blue-duck-p-4");

    const productName = product.getProductName();
    const productPrice = product.getProductPrice();

    // console.log("NNN"+productName+productPrice);

    product.addToCart();
    //browser.pause(5000);
   // const checkout = new Checkout();
    checkout.open();
    //browser.pause(5000);
    expect(checkout.ifItemsInCart()).to.be.true;

    let productNamefromCart = checkout.shoppingCart.items[0].getProductName();

    let productPricefromCart = checkout.shoppingCart.items[0].getProductPrice();

    // console.log("TTT"+" name: "+productNamefromCart+" price:"+productPricefromCart+" quantity:"+productQuantityfromCart);

    expect(productNamefromCart, "Name difference").eql(productName);

    expect(productPricefromCart, "Price difference").eql(productPrice);

    checkout.customerDetails.populateAllData();
    checkout.customerDetails.saveChanges();
    browser.pause(2000);
    checkout.confirmOrder();
    browser.pause(3000);
    let curUrl = browser.getUrl();
    expect(curUrl).include("/order_success");

    // throw new Error("NOT IMPLEMENTED");
  });

  it("is successful for sold out item", function() {
    // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/purple-duck-p-5
    // this duck always sold out
    let product = new ProductDetails();
    let checkout = new Checkout();
    product.open("/rubber-ducks-c-1/purple-duck-p-5");

    const productName = product.getProductName();
    const productPrice = product.getProductPrice();

    // console.log("NNN"+productName+productPrice);

    product.addToCart();
    //browser.pause(5000);
    //const checkout = new Checkout();
    checkout.open();
    //browser.pause(5000);
    expect(checkout.ifItemsInCart()).to.be.true;

    let productNamefromCart = checkout.shoppingCart.items[0].getProductName();

    let productPricefromCart = checkout.shoppingCart.items[0].getProductPrice();

    // console.log("TTT"+" name: "+productNamefromCart+" price:"+productPricefromCart+" quantity:"+productQuantityfromCart);

    expect(productNamefromCart, "Name difference").eql(productName);

    expect(productPricefromCart, "Price difference").eql(productPrice);

    checkout.customerDetails.populateAllData();
    checkout.customerDetails.saveChanges();
    browser.pause(2000);
    checkout.confirmOrder();
    browser.pause(2000);
    let curUrl = browser.getUrl();
    expect(curUrl).include("/order_success");

    //throw new Error("NOT IMPLEMENTED");
  });

  it("is successful for 2 same items in card", function() {
    // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/red-duck-p-3
    // Just regular duck without discounts, parameters, or sold our
    let product = new ProductDetails();
    let checkout = new Checkout();
    product.open("h/rubber-ducks-c-1/red-duck-p-3");

    const productName = product.getProductName();
    const productPrice = product.getProductPrice();

    // console.log("NNN"+productName+productPrice);

    product.addToCart();
    product.open("h/rubber-ducks-c-1/red-duck-p-3");
    // console.log("NNN"+productName+productPrice);

    product.addToCart();
    //browser.pause(5000);
    //const checkout = new Checkout();
    checkout.open();
    //browser.pause(5000);
    expect(checkout.ifItemsInCart()).to.be.true;

    let productNamefromCart = checkout.shoppingCart.items[0].getProductName();
    let productPricefromCart = checkout.shoppingCart.items[0].getProductPrice();
    let productQuantityfromCart = checkout.shoppingCart.items[0].getProductQuantity();
    let Sum = checkout.shoppingCart.items[0].getSum(
      productPricefromCart,
      productQuantityfromCart
    );
    console.log("Sum of all: " + Sum);

    // console.log("TTT"+" name: "+productNamefromCart+" price:"+productPricefromCart+" quantity:"+productQuantityfromCart);

    expect(productNamefromCart, "Name difference").eql(productName);

    expect(productPricefromCart, "Price difference").eql(productPrice);

    expect(Sum, "incorrect sum").eql(productPrice * 2);

    checkout.customerDetails.populateAllData();
    checkout.customerDetails.saveChanges();
    browser.pause(2000);
    checkout.confirmOrder();
    browser.pause(2000);
    let curUrl = browser.getUrl();
    expect(curUrl).include("/order_success");

    //  throw new Error("NOT IMPLEMENTED");
  });

  it("is successful for 2 different items in card", function() {
    let productArray = [];
    let product = new ProductDetails();
    let checkout = new Checkout();
    product.open("/rubber-ducks-c-1/red-duck-p-3");
    let firstDuck = product.getAllProductInfo();
    productArray.push(firstDuck);
    product.addToCart();
    //console.log("firstDuck:"+firstDuck)

    product.open("/rubber-ducks-c-1/blue-duck-p-4");
    let secondDuck = product.getAllProductInfo();
    //console.log("secondDuck"+secondDuck)
    product.addToCart();
    productArray.push(secondDuck);
    console.log("productArray:" + productArray);
    // for (const key in productArray) {

    //     const element = productArray[key];
    //     console.log("Prod"+element)

    // }

    //const checkout = new Checkout();
    checkout.open();
    expect(checkout.ifItemsInCart()).to.be.true;

    let allProductsCart = checkout.shoppingCart.items.map(item => {
      return item.getProductName() + item.getProductPrice();
    });

    console.log("allProductsCart:" + allProductsCart);

   productArray.sort();
    expect(productArray).eql(allProductsCart);

    checkout.customerDetails.populateAllData();
    checkout.customerDetails.saveChanges();
    browser.pause(2000);
    checkout.confirmOrder();
    browser.pause(2000);
    let curUrl = browser.getUrl();
    expect(curUrl).include("/order_success");
    // browser.pause(12000);

    //throw new Error("NOT IMPLEMENTED");
  });

  it("is successful for items with parameters", function() {
    // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/premium-ducks-c-2/vip-yellow-duck-p-6
    // this duck has 3 sizes - small, medium, large. Each size has own price. Verify that price calculated correctly
    let productArray = [];
    let product = new ProductDetails();
    let checkout = new Checkout();

    product.open("/rubber-ducks-c-1/premium-ducks-c-2/vip-yellow-duck-p-6");

    let yellowDuck = product.setSize("Large");
    console.log("yellowDuck" + yellowDuck);
    productArray.push(yellowDuck);
    // browser.pause(2000);
    product.addToCart();

   // const checkout = new Checkout();
    checkout.open();
    // browser.pause(5000);
    expect(checkout.ifItemsInCart()).to.be.true;

    let allProductsCart = checkout.shoppingCart.items.map(item => {
      return item.getProductName() + item.getProductPrice();
    });

    console.log("allProductsCart:" + allProductsCart);
    expect(productArray).eql(allProductsCart);

    checkout.customerDetails.populateAllData();
    checkout.customerDetails.saveChanges();
    browser.pause(2000);
    checkout.confirmOrder();
    browser.pause(2000);
    let curUrl = browser.getUrl();
    expect(curUrl).include("/order_success");
    // browser.pause(12000);

    //throw new Error("NOT IMPLEMENTED");
  });

  beforeEach(function() {
   
   let checkout = new Checkout();
    if (checkout.ifNoItemsInCart) {
      console.log("No items in the basket");
    } else {
      checkout.shoppingCart.items.forEach(element => {
        element.deleteAllItems();
        checkout.open();
      });}
  });
});

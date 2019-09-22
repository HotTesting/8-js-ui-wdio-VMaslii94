import { Checkout } from "../pageObject/checkout";
//import { App } from '../../pageObjects/application';
import { expect } from "chai";
import { ProductDetails } from "../pageObject/productDetails";
import { ValidCustomerModel } from "../dataModel/customer";
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
  let data1 = new ValidCustomerModel();
  it("is successful for regular item", function() {
    // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/red-duck-p-3
    // Just regular duck without discounts, parameters, or sold our
    let product = new ProductDetails();
    product.open("/rubber-ducks-c-1/red-duck-p-3");

    const productName = product.getProductName();
    const productPrice = product.getProductPrice();

    product.addToCart();
    let checkout = new Checkout();
    checkout.open();
    expect(checkout.ifItemsInCart()).to.be.true;

    let productNamefromCart = checkout.shoppingCart.items[0].getProductName();

    let productPricefromCart = checkout.shoppingCart.items[0].getProductPrice();

    expect(productNamefromCart, "Name difference").eql(productName);

    expect(productPricefromCart, "Price difference").eql(productPrice);

    checkout.customerDetails.setCustomerDetails(data1);
    checkout.customerDetails.saveChanges();
    checkout.confirmOrder();
    let curUrl = browser.getUrl();
    expect(curUrl).include("/order_success");
    expect(product.header.headerCart.getQuantity()).eql(0);
  });

  it("is successful for discounted item", function() {
    // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/blue-duck-p-4
    // this duck always has discount 20%
    let product = new ProductDetails();
    let checkout = new Checkout();
    product.open("/rubber-ducks-c-1/blue-duck-p-4");

    const productName = product.getProductName();
    const productPrice = product.getProductPrice();

    product.addToCart();

    checkout.open();

    expect(checkout.ifItemsInCart()).to.be.true;

    let productNamefromCart = checkout.shoppingCart.items[0].getProductName();

    let productPricefromCart = checkout.shoppingCart.items[0].getProductPrice();

    expect(productNamefromCart, "Name difference").eql(productName);

    expect(productPricefromCart, "Price difference").eql(productPrice);

    checkout.customerDetails.setCustomerDetails(data1);
    checkout.customerDetails.saveChanges();

    checkout.confirmOrder();
    let curUrl = browser.getUrl();
    expect(curUrl).include("/order_success");
    expect(product.header.headerCart.getQuantity()).eql(0);

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

    product.addToCart();

    checkout.open();

    expect(checkout.ifItemsInCart()).to.be.true;

    let productNamefromCart = checkout.shoppingCart.items[0].getProductName();

    let productPricefromCart = checkout.shoppingCart.items[0].getProductPrice();

    // console.log("TTT"+" name: "+productNamefromCart+" price:"+productPricefromCart+" quantity:"+productQuantityfromCart);

    expect(productNamefromCart, "Name difference").eql(productName);

    expect(productPricefromCart, "Price difference").eql(productPrice);

    checkout.customerDetails.setCustomerDetails(data1);
    checkout.customerDetails.saveChanges();

    checkout.confirmOrder();

    let curUrl = browser.getUrl();
    expect(curUrl).include("/order_success");
    expect(product.header.headerCart.getQuantity()).eql(0);

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

    product.addToCart();
    product.open("h/rubber-ducks-c-1/red-duck-p-3");

    product.addToCart();

    checkout.open();

    expect(checkout.ifItemsInCart()).to.be.true;

    let productNamefromCart = checkout.shoppingCart.items[0].getProductName();
    let productPricefromCart = checkout.shoppingCart.items[0].getProductPrice();
    let productQuantityfromCart = checkout.shoppingCart.items[0].getProductQuantity();
    let Sum = checkout.shoppingCart.items[0].getSum(
      productPricefromCart,
      productQuantityfromCart
    );
    expect(productNamefromCart, "Name difference").eql(productName);

    expect(productPricefromCart, "Price difference").eql(productPrice);

    expect(Sum, "incorrect sum").eql(productPrice * 2);

    checkout.customerDetails.setCustomerDetails(data1);
    checkout.customerDetails.saveChanges();

    checkout.confirmOrder();

    let curUrl = browser.getUrl();
    expect(curUrl).include("/order_success");

    //  throw new Error("NOT IMPLEMENTED");
  });

  it("is successful for 2 different items in card", function() {
    let productArray1 = [];
    let product = new ProductDetails();
    let checkout = new Checkout();
    product.open("/rubber-ducks-c-1/red-duck-p-3");
    let firstDuck = product.getAllProductInfo();
    productArray1.push(firstDuck);
    product.addToCart();
    //console.log("firstDuck:"+firstDuck)

    product.open("/rubber-ducks-c-1/blue-duck-p-4");
    let secondDuck = product.getAllProductInfo();
    //console.log("secondDuck"+secondDuck)
    product.addToCart();
    productArray1.push(secondDuck);
    console.log("productArray1:" + productArray1);

    checkout.open();
    expect(checkout.ifItemsInCart()).to.be.true;

    let allProductsCart = checkout.shoppingCart.items.map(item => {
      return item.getProductName() + item.getProductPrice();
    });

    console.log("allProductsCart:" + allProductsCart);

    // productArray1.sort();
    expect(productArray1).eql(allProductsCart);

    checkout.customerDetails.setCustomerDetails(data1);
    checkout.customerDetails.saveChanges();

    checkout.confirmOrder();

    let curUrl = browser.getUrl();
    expect(curUrl).include("/order_success");

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

    product.addToCart();

    checkout.open();

    expect(checkout.ifItemsInCart()).to.be.true;

    let allProductsCart = checkout.shoppingCart.items.map(item => {
      return item.getProductName() + item.getProductPrice();
    });

    console.log("allProductsCart:" + allProductsCart);
    expect(productArray).eql(allProductsCart);

    checkout.customerDetails.setCustomerDetails(data1);
    checkout.customerDetails.saveChanges();

    checkout.confirmOrder();

    let curUrl = browser.getUrl();
    expect(curUrl).include("/order_success");

    //throw new Error("NOT IMPLEMENTED");
  });

  beforeEach(function() {
    browser.deleteAllCookies();

    //  let checkout = new Checkout();
    //   if (checkout.ifNoItemsInCart) {
    //     console.log("No items in the trash");
    //   } else {
    //     checkout.shoppingCart.items.forEach(element => {
    //       element.deleteAllItems();
    //       checkout.open();
    //     });}
  });
});

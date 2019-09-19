import { Checkout } from '../pageObject/checkout';
//import { App } from '../../pageObjects/application';
import { expect } from "chai";
import { ProductDetails } from "../pageObject/productDetails";
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
describe("Order", function () {
    it("is successful for regular item", function () {
        // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/red-duck-p-3
        // Just regular duck without discounts, parameters, or sold our
        const product = new ProductDetails();
        product.open("/rubber-ducks-c-1/red-duck-p-3");
        const productName = product.getProductName();
        const productPrice = product.getProductPrice();
        //const productQuantity= product.getProductQuantity();
        // console.log("NNN"+productName+productPrice);
        product.addToCart();
        //browser.pause(5000);
        const checkout = new Checkout();
        checkout.open();
        //browser.pause(5000);
        expect(checkout.ifItemsInCart()).to.be.true;
        let productNamefromCart = checkout.shoppingCart.items[0].getProductName();
        let productPricefromCart = checkout.shoppingCart.items[0].getProductPrice();
        // console.log("TTT"+" name: "+productNamefromCart+" price:"+productPricefromCart+" quantity:"+productQuantityfromCart);
        expect(productNamefromCart, "Name difference").eql(productName);
        expect(productPricefromCart, "Price difference").eql(productPricefromCart);
        checkout.customerDetails.populateAllData();
        checkout.customerDetails.saveChanges();
        browser.pause(2000);
        checkout.confirmOrder();
        browser.pause(2000);
        let curUrl = browser.getUrl();
        expect(curUrl).include("/order_success");
        //browser.pause(12000);
    });
    it("is successful for discounted item", function () {
        // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/blue-duck-p-4 
        // this duck always has discount 20%
        throw new Error("NOT IMPLEMENTED");
    });
    it("is successful for sold out item", function () {
        // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/purple-duck-p-5 
        // this duck always sold out
        throw new Error("NOT IMPLEMENTED");
    });
    it("is successful for 2 same items in card", function () {
        // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/red-duck-p-3
        // Just regular duck without discounts, parameters, or sold our
        throw new Error("NOT IMPLEMENTED");
    });
    it("is successful for 2 different items in card", function () {
        let productArray = [];
        const product = new ProductDetails();
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
        const checkout = new Checkout();
        checkout.open();
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
    it("is successful for items with parameters", function () {
        // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/premium-ducks-c-2/vip-yellow-duck-p-6 
        // this duck has 3 sizes - small, medium, large. Each size has own price. Verify that price calculated correctly
        throw new Error("NOT IMPLEMENTED");
    });
});

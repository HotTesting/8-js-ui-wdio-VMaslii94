import { Checkout } from "../../pageObject/checkout";
//import { App } from '../../pageObjects/application';
import { expect } from "chai";
import { ProductDetails } from "../../pageObject/productDetails";
import { it } from "mocha";

describe("Adding", function() {
  it("Adding product", function() {
    const product = new ProductDetails();
    product.open("/rubber-ducks-c-1/red-duck-p-3");
    product.addToCart();
    const checkout = new Checkout();
    checkout.open();
    expect(checkout.ifItemsInCart()).to.be.true;
  });
  it("Much products", () => {
    let productArray = [];
    const product = new ProductDetails();
    product.open("/rubber-ducks-c-1/red-duck-p-3");
    let firstDuck = product.getAllProductInfo();
    productArray.push(firstDuck);
    //console.log("firstDuck:"+firstDuck)

    //   const productName = product.getProductName();
    //   const productPrice = product.getProductPrice();
    //   //const productQuantity= product.getProductQuantity();

    //  // console.log("NNN"+productName+productPrice);

    product.addToCart();

    product.open("/rubber-ducks-c-1/blue-duck-p-4");
    let secondDuck = product.getAllProductInfo();
    //console.log("secondDuck"+secondDuck)
    productArray.push(secondDuck);

    console.log("productArray:" + productArray);
    // for (const key in productArray) {

    //     const element = productArray[key];
    //     console.log("Prod"+element)

    // }
    product.addToCart();

    // let productNamefromCart = checkout.shoppingCart.items[0].getProductName();

    // let productPricefromCart = checkout.shoppingCart.items[0].getProductPrice();

    // //let b = productPricefromCart1.getAll()

    //  // console.log("TTT"+" name: "+productNamefromCart+" price:"+productPricefromCart+" quantity:"+productQuantityfromCart);

    //   expect(productNamefromCart,"Name difference").eql(productName)

    //   expect(productPricefromCart,"Price difference").eql(productPricefromCart)

    product.open("/rubber-ducks-c-1/premium-ducks-c-2/vip-yellow-duck-p-6");

    let thirdDuck = product.setSize("Large");
    console.log("thirdDuck" + thirdDuck);
    productArray.push(thirdDuck);
    product.addToCart();

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
    checkout.confirmOrder();
    let curUrl = browser.getUrl();
    expect(curUrl).include("/order_success");
  });

  it.only("My test", () => {
    const product = new ProductDetails();
    product.open("/rubber-ducks-c-1/red-duck-p-3");

    const productName = product.getProductName();
    const productPrice = product.getProductPrice();

    // console.log("NNN"+productName+productPrice);

    product.addToCart();
    product.open("/rubber-ducks-c-1/blue-duck-p-4");
    // console.log("NNN"+productName+productPrice);

    product.addToCart();

    product.open("/rubber-ducks-c-1/purple-duck-p-5");
    product.addToCart();
    const checkout = new Checkout();
    checkout.open();
    expect(checkout.ifItemsInCart()).to.be.true;
    

    
    //  checkout.shoppingCart.items.map(item => {
    //   item.deleteAllItems();
    // });
    // let productNamefromCart = checkout.shoppingCart.items[0].getProductName();
    // let productPricefromCart = checkout.shoppingCart.items[0].getProductPrice();
    // let productQuantityfromCart = checkout.shoppingCart.items[0].getProductQuantity();
    // let Sum = checkout.shoppingCart.items[0].getSum(
    //   productPricefromCart,
    //   productQuantityfromCart
    // );
    // console.log("Sum of all: " + Sum);

    // // console.log("TTT"+" name: "+productNamefromCart+" price:"+productPricefromCart+" quantity:"+productQuantityfromCart);

    // expect(productNamefromCart, "Name difference").eql(productName);

    // expect(productPricefromCart, "Price difference").eql(productPrice);

    // expect(Sum,"incorrect sum").eql(productPrice*2);

    // checkout.customerDetails.populateAllData();
    // checkout.customerDetails.saveChanges();
    
    // checkout.confirmOrder();
    // let curUrl = browser.getUrl();
    // expect(curUrl).include("/order_success");
  });
});

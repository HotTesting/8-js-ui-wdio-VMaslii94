import { Header } from "./components/header";
import { Footer } from "./components/footers";
import { ProductDetailsModel } from "../dataModel/productDetail";

export class ProductDetails {
  header = new Header();
  footer = new Footer();

  open(path) {
    browser.url(path);
  }

  addToCart() {
    $('button[name="add_cart_product"]').click();
    browser.pause(4000);
  }
  getProductPrice() {
    return parseFloat($("#box-product.box").getAttribute("data-price"));
  }
  getProductName() {
    return $("h1.title").getText();
  }
  getProductQuantity() {
    return parseFloat($("#box-product.box").getAttribute("data-quantity"));
  }

  getAllProductInfo() {
    const productDetails = new ProductDetailsModel();
    productDetails.name = this.getProductName();
    productDetails.price = this.getProductPrice();

    // productDetails.quantity = this.getProductQuantity();

    return productDetails.name + productDetails.price;
  }

  setSize(size) {
    //$('select.form-control').click()
    $("select.form-control").selectByAttribute("value", size);
    let currentPrice = parseFloat(
      $("#box-product.box").getAttribute("data-price")
    );
    const productDetails = new ProductDetailsModel();
    productDetails.name = this.getProductName();

    switch (size) {
      case "Medium":
        productDetails.price = currentPrice + 50;
        console.log("MMM" + productDetails.price);
        return productDetails.name + productDetails.price;
      case "Large": {
        productDetails.price = currentPrice + 100;

        console.log("LLL" + productDetails.price);
        return productDetails.name + productDetails.price;
      }
      case "Small": {
        productDetails.price = currentPrice;
        console.log("Small" + productDetails.price);
        return productDetails.name + productDetails.price;
      }
      default:
        break;
    }

    // let y= $('select.form-control option').getAttribute('value');
    // // if(y==size){
    // //  let p= $('select.form-control option[value="Medium"]').getAttribute('data-price-adjust');
    // //  console.log("PPP"+p)
  }

  //$('select.form-control').selectByAttribute(size)
}

import { Header } from "./components/header";
import { Footer } from "./components/footers";
import { ProductDetailsModel } from "../dataModel/productDetail";
export class ProductDetails {
    constructor() {
        this.header = new Header();
        this.footer = new Footer();
    }
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
        $('select.form-control').selectByAttribute('value', size);
        let y = $('select.form-control option').getAttribute('value');
        if (y == size) {
            y.getA;
        }
        //$('select.form-control').selectByAttribute(size)
    }
}

import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
// import getParam
import { getParam } from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";

// data source for products from Product Data
const dataSource = new ProductData("tents");

// get the product id's by the url
const productID = getParam("product");

// product Details - this is the instance
const product = new ProductDetails(productID, dataSource);
// ejecute init()
product.init();

/*
function addProductToCart(product) {
  let cart = getLocalStorage("so-cart") || []; // we made an array
  cart.push(product);
  setLocalStorage("so-cart", cart);
} */

// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch } from "../data/cart.js";
// import '../data/cart-class.js';

async function loadPage() {
  try {

    // await loadProductsFetch();
    // await loadCartFetch();
    await Promise.all([
      loadProductsFetch(),
      loadCartFetch()
    ]);
    
  } catch (error) {
    console.log('Unexpected error. Please try again later.')
  }

  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();

};

loadPage();


/*

Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values)
  renderOrderSummary();
  renderCheckoutHeader();
  renderPaymentSummary();
});

*/


/*

new Promise((resolve) => {
  loadProducts(() => {
    resolve()
  });

}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderCheckoutHeader();
  renderPaymentSummary();
});
// loadCart();

*/


// loadProducts(() => {
// loadCart(() => {
// renderOrderSummary();
// renderPaymentSummary();
// renderCheckoutHeader();
// });
// })
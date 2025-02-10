const PRODUCTS = [
  { id: 1, name: "Apple", price: 2.5 },
  { id: 2, name: "Banana", price: 1.5 },
  { id: 3, name: "Orange", price: 3 },
  { id: 4, name: "Rice", price: 1.5 },
  { id: 5, name: "Chocolate", price: 3 },
];

const SHOPPING_CART = [
  { id: 1, quantity: 2 },
  { id: 3, quantity: 1 },
];

/**
 * Get the total amount of the shopping cart.
 * @returns {number} The total price of all items in the cart.
 */
function getCartTotalAmount() {
  let result = 0;

  SHOPPING_CART.forEach((item) => {
    let product = PRODUCTS.find((p) => p.id === item.id);
    if (product) {
      result += product.price * item.quantity;
    }
  });

  return result;
}

/**
 * Add a product to the shopping cart.
 * @param {number} productId - The product ID to add.
 */
function addProductToCart(productId) {
  let cartItem = SHOPPING_CART.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity += 1; // Increment quantity if product exists
  } else {
    SHOPPING_CART.push({ id: productId, quantity: 1 }); // Add new product with quantity 1
  }
}

/**
 * Remove a product from the shopping cart.
 * @param {number} productId - The product ID to remove.
 */
function removeProductFromCart(productId) {
  let cartIndex = SHOPPING_CART.findIndex((item) => item.id === productId);

  if (cartIndex !== -1) {
    if (SHOPPING_CART[cartIndex].quantity > 1) {
      SHOPPING_CART[cartIndex].quantity -= 1; // Decrease quantity if more than 1
    } else {
      SHOPPING_CART.splice(cartIndex, 1); // Remove product if quantity is 1
    }
  }
}

// --------------------------------------------------------
// TESTS ZONE
// --------------------------------------------------------

console.log(getCartTotalAmount()); // Should be 8

addProductToCart(1);
console.log(JSON.stringify(SHOPPING_CART)); // Should be [{"id":1,"quantity":3},{"id":3,"quantity":1}]

addProductToCart(2);
console.log(JSON.stringify(SHOPPING_CART)); // Should be [{"id":1,"quantity":3},{"id":3,"quantity":1},{"id":2,"quantity":1}]

removeProductFromCart(1);
console.log(JSON.stringify(SHOPPING_CART)); // Should be [{"id":1,"quantity":2},{"id":3,"quantity":1},{"id":2,"quantity":1}]

removeProductFromCart(2);
console.log(JSON.stringify(SHOPPING_CART)); // Should be [{"id":1,"quantity":2},{"id":3,"quantity":1}]

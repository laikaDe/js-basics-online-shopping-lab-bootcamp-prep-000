var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemNames) {
  var price = Math.floor(Math.random() * 100)+1
  var items = {}
  items[itemNames] = price
  cart.push(items)
  console.log(item + "has been added to your cart")
  return cart

 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

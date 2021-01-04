var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var random = Math.floor(Math.random() * 100) + 1
  var items = {
    itemName: item,
    itemPrice: random
    }
  cart.push(items)
  return `${cart[cart.length -1].itemNam} has been added to your cart.`
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

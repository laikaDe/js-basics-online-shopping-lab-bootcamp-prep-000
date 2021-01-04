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
  return `${cart[cart.length -1].itemName} has been added to your cart.`
 // write your code here
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }
  else {
    cartItems = []

    var last = `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`

    for(var i = 0; i < cart.length - 1; i++){
       cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    return `In your cart, you have ${cartItems.join(', ')}, and ${last}`
  }
}


function total(){
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart.itemPrice[i]
  }
  return total
}

function removeFromCart(item) {
  const itemName = []

  for(var i = 0; i < cart.length; i++){
    itemName.push(cart[i].itemName)
    }

  const index = itemName.indexOf(item)

  if(index > -1){
     cart.splice(index, 1)
     return cart
  } else {
    return `That item is not in your cart.`
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    const total1 = total()
    cart.length = 0 
    return `Your total cost is $${total1}, which will be charged to the card ${cardNumber}.`
  }
}

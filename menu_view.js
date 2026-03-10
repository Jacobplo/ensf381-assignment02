const add_btn = document.getElementsByClassName("add_btn");
const remove_btn = document.getElementsByClassName("remove_btn");
const cart = document.getElementById("cart");

function add_cart_item(name, price) {
  var element = document.createElement("div");
  element.className = "cart_item";
  element.innerHTML = `
    <span><b>${name}</b></span>
    <span>${price}</span>
  `;

  cart.appendChild(element)
}

add_cart_item("Name", "Price")

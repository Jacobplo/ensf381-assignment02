const add_btns = document.getElementsByClassName("add_btn")
const remove_btns = document.getElementsByClassName("remove_btn")
const cart = document.getElementById("cart");

const cart_items = []

function add_cart_item(name, count, price) {
  var element = document.createElement("div");
  element.className = "cart_item";
  element.innerHTML = `
    <span><b>${name} (${count})</b></span>
    <span>${price}</span>
  `;

  cart.appendChild(element);
}

function render() {
  let class_cart_items = [...cart.getElementsByClassName("cart_item"), ...cart.getElementsByTagName("p")];
  for (let item of class_cart_items) {
    cart.removeChild(item)
  }

  var element;

  if (cart_items.length == 0) {
    element = document.createElement("p")
    element.textContent = "No items in cart."
    cart.appendChild(element)
  }

  for (let item of cart_items) {
    add_cart_item(item[0], item[1], "$" + item[2].toFixed(2).toString())
  }
}

for (let btn of add_btns) {
  let tile = btn.parentElement.parentElement
  let name = tile.getElementsByTagName("h3")[0].textContent;
  let price = tile.getElementsByTagName("p")[0].textContent;
  price = parseFloat(price.slice(price.indexOf('$') + 1, price.length));
  btn.addEventListener("click", ()=>{
    for (let item of cart_items) {
      if (item[0] == name) {
        item[1]++;
        item[2] += price;
        render();
        return;
      }
    }
    cart_items.push([name, 1, price]);
    render();
  });
}


for (let btn of remove_btns) {
  let tile = btn.parentElement.parentElement
  let name = tile.getElementsByTagName("h3")[0].textContent;
  let price = tile.getElementsByTagName("p")[0].textContent;
  price = parseFloat(price.slice(price.indexOf('$') + 1, price.length));
  btn.addEventListener("click", ()=>{
    for (let item of cart_items) {
      if (item[0] == name) {
        item[1]--;
        item[2] -= price;
        if (item[1] == 0) cart_items.splice(cart_items.indexOf(item), 1); 
        render();
      }
    }
  });
}

render();

const timer = document.getElementById("timer");
const type_cup = document.getElementById("type_cup");
const type_cone = document.getElementById("type_cone");
const topping1 = document.getElementById("topping1");
const topping2 = document.getElementById("topping2");
const topping3 = document.getElementById("topping3");
const main = document.getElementsByClassName("customize_order_main")[0];
const type_error = document.getElementById("type_error");
const toppings_error = document.getElementById("toppings_error");



let counter = 599;
setInterval(()=>{
  let time_formatted = String(Math.floor(counter / 60)).padStart(2, '0') + ":" + String((counter % 60)).padStart(2, '0');
  timer.textContent = "Order Time Left: " + time_formatted;

  counter--;

  if (counter < 0) {
    window.location.href = "order_summary.html";
  }
}, 1000);

let base_price = 0.00;
let topping_price = 0.00;
function render_price() {
  const price = document.getElementById("total_price");
  price.textContent = "Total Price: $" + (base_price + topping_price).toFixed(2).toString();
}

function render_errors() {
   
}

let form = main.getElementsByTagName("form")[0];
let btns = main.getElementsByTagName("button");

btns[0].addEventListener("click", ()=>{
  if (!type_cup.checked && !type_cone.checked) {
    toppings_error.innerHTML = <b>RAAA</b>;
    render_errors();
  }
  else {
    base_price = 6.00
    render_price();
  }
});

btns[1].addEventListener("click", ()=>{
  topping_price = 0.00;
  for (let topping of [topping1, topping2, topping3]) {
    if (topping.checked) {
      topping_price += 1.5;
    }
  }
  render_price();
});

render_price();

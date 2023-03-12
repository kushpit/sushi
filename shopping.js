// Список товарів в магазині
let products = [
  { name: "Каліфорнійський рол з лососем", price: 150 },
  { name: "Філадельфія рол", price: 120 },
  { name: "Унагі рол", price: 160 },
  { name: "Місо суп", price: 70 },
  { name: "Салат з осьминогом", price: 100 },
];

// Кошик покупця
let cart = [];

// Функція для відображення кошика
function displayCart() {
  let cartSummary = "";
  if (cart.length === 0) {
    cartSummary = "Кошик порожній!";
  } else {
    let total = calculateTotal();
    cartSummary = `В кошику ${cart.length} товар(ів) на суму ${total} грн.`;
  }
  document.getElementById("cart-summary").textContent = cartSummary;

  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    let cartItem = cart[i];
    let itemElement = document.createElement("li");
    itemElement.textContent = `${cartItem.name} - ${cartItem.price} грн. `;
    let removeButton = document.createElement("button");
    removeButton.textContent = "Видалити";
    removeButton.addEventListener("click", () => {
      removeFromCart(cartItem.cartIndex);
    });
    itemElement.appendChild(removeButton);
    cartItems.appendChild(itemElement);
  }
}

function addToCart(index) {
  cartItems.push(products[index]);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  displayCart();
}



let cartItems = []; // глобальний масив для зберігання обраних товарів

function addToCart(itemIndex) {
  let selectedProduct = document.querySelectorAll('#product-list li')[itemIndex];
  let productName = selectedProduct.querySelector('span').textContent;
  let productPrice = selectedProduct.querySelector('span:nth-child(3)').textContent;

  let cartItem = { name: productName, price: productPrice };
  cartItems.push(cartItem); // додати вибраний товар до масиву

  // зберегти масив товарів в LocalStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  updateCartSummary();
}


function updateCartSummary() {
  let cartSummary = document.querySelector('#cart-summary');
  let totalPrice = 0;

  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += parseInt(cartItems[i].price); // додати ціну кожного товару до загальної суми
  }

  cartSummary.textContent = `У кошику ${cartItems.length} товарів на суму ${totalPrice} грн`;
}



// Додаємо товар у кошик
function addToCart(index) {
  let cartItem = {...products[index], cartIndex: cart.length};
  cart.push(cartItem);
  displayCart();
}
function removeFromCart(cartIndex) {
  cart.splice(cartIndex, 1);
  displayCart();
}


// Обчислюємо загальну суму покупки
function calculateTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return total;
}

// Функція оформлення замовлення
function checkout() {
  let total = calculateTotal();
  if (total === 0) {
    alert("Кошик порожній!");
  } else {
    alert(`Ваш рахунок складає ${total} грн`);
    // Додайте код для оплати в онлайні
  }
}

// Відображення початкового стану кошика
displayCart();

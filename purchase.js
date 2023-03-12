function processPayment() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let cardNumber = document.getElementById("card").value;
    let expDate = document.getElementById("exp-date").value;
    let cvv = document.getElementById("cvv").value;
    
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let total = calculateTotal();
    
    // Код для обробки платежу
    
    localStorage.removeItem("cartItems");
    location.href = ".html";
  }
  
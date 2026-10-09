let cart = JSON.parse(localStorage.getItem("cart")) || [];

let output = "";

cart.forEach(function(item){

    output += `
    <div class="card">

        <img src="${item.image}" width="150">

        <h2>${item.name}</h2>

        <h3>₹${item.price}</h3>

    </div>
    `;

});

document.getElementById("cartItems").innerHTML = output;
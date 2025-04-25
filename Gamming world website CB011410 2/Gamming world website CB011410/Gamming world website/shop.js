document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    // Retrieve product data from the parent container
    const product = this.parentElement;
    const id = product.dataset.id;
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price); // Ensure it's a number

    // Retrieve cart from a session variable (not stored in localStorage)
    let cart = window.cart || [];

    // Find if the product is already in the cart
    const item = cart.find(p => p.id === id);

    if (item) {
      // Increase quantity if item exists in the cart
      item.qty += 1;
    } else {
      // Otherwise, add the new item to the cart
      cart.push({ id, name, price, qty: 1 });
    }

    // Store the cart in the session for this page session
    window.cart = cart;

    // Update the cart table
    updateCartTable();
  });
});

function updateCartTable() {
  const cart = window.cart || [];
  const tableBody = document.querySelector('#cart-table tbody');
  tableBody.innerHTML = ''; // Clear existing rows

  let subtotal = 0; // Initialize the subtotal variable

  cart.forEach(item => {
    const row = document.createElement('tr');

    // Create and append the Product Name cell
    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    // Create and append the Price cell with LKR symbol
    const priceCell = document.createElement('td');
    priceCell.textContent = `LKR ${item.price.toFixed(2)}`;
    row.appendChild(priceCell);

    // Create and append the Quantity cell
    const qtyCell = document.createElement('td');
    qtyCell.textContent = item.qty;
    row.appendChild(qtyCell);

    // Calculate and append the Total Price cell (price * quantity) with LKR symbol
    const totalPriceCell = document.createElement('td');
    const totalPrice = item.price * item.qty;
    totalPriceCell.textContent = `LKR ${totalPrice.toFixed(2)}`;
    row.appendChild(totalPriceCell);

    // Append the row to the table
    tableBody.appendChild(row);

    // Add the total price to the subtotal
    subtotal += totalPrice;
  });

  // Update the subtotal with LKR symbol
  document.querySelector('#subtotal').textContent = `Subtotal: LKR ${subtotal.toFixed(2)}`;
}

// Initialize the cart table when the page loads
document.addEventListener('DOMContentLoaded', updateCartTable);

// Clear the cart when the page reloads
window.cart = [];

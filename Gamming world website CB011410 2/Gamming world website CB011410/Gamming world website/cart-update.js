function updateCartTable() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const tbody = document.querySelector('#cartTable tbody');
  const subtotalElement = document.querySelector('#subtotal');
  tbody.innerHTML = '';

  let subtotal = 0;

  cart.forEach(p => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${p.name}</td>
      <td>${p.qty}</td>
      <td>$${p.price}</td>
      <td>$${(p.price * p.qty).toFixed(2)}</td>
    `;
    tbody.appendChild(row);

    // Calculate subtotal
    subtotal += p.price * p.qty;
  });

  // Update subtotal
  subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;

  if (cart.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.innerHTML = `<td colspan="4">Your cart is empty.</td>`;
    tbody.appendChild(emptyRow);
    subtotalElement.textContent = `Subtotal: $0.00`;
  }
}

window.addEventListener('load', updateCartTable);

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    const product = this.parentElement;
    const id = product.dataset.id;
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(p => p.id === id);

    if (item) {
      item.qty += 1;
    } else {
      cart.push({ id, name, price, qty: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTable();
  });
});

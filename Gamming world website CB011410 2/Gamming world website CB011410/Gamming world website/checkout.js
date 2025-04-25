document.getElementById('checkoutForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Simulate order submission
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;

  // Normally, you would send this data to a server here. For now, we simulate success.

  // Show the success dialog
  const successDialog = document.getElementById('orderSuccessDialog');
  successDialog.style.display = 'flex';

  // Clear form after order
  document.getElementById('checkoutForm').reset();
});

// Close the success dialog when the "Close" button is clicked
document.getElementById('closeDialogBtn').addEventListener('click', function() {
  const successDialog = document.getElementById('orderSuccessDialog');
  successDialog.style.display = 'none';

  // Redirect user to shop page (optional)
  window.location.href = "shop.html"; // Or modify as needed
});

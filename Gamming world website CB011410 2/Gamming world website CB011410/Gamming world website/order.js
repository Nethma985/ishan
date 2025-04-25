const components = {
  processors: [
    { name: "Intel i9", price: 400, img: "images/intel-i9.jpg" },
    { name: "AMD Ryzen 9", price: 350, img: "images/ryzen-9.jpg" },
    { name: "Intel i7", price: 300, img: "images/intel-i7.jpg" },
    { name: "AMD Ryzen 7", price: 280, img: "images/ryzen-7.jpg" },
    { name: "Intel i5", price: 220, img: "images/intel-i5.jpg" },
    { name: "AMD Ryzen 5", price: 200, img: "images/ryzen-5.jpg" },
  ],
  graphics: [
    { name: "NVIDIA RTX 4090", price: 1600, img: "images/rtx4090.jpg" },
    { name: "NVIDIA RTX 4080", price: 1200, img: "images/rtx4080.jpg" },
    { name: "NVIDIA RTX 4070", price: 900, img: "images/rtx4070.jpg" },
    { name: "AMD RX 7900 XTX", price: 1000, img: "images/rx7900xtx.jpg" },
    { name: "AMD RX 7800 XT", price: 800, img: "images/rx7800xt.jpg" },
    { name: "AMD RX 7700 XT", price: 700, img: "images/rx7700xt.jpg" },
  ],
  motherboards: [
    { name: "ASUS ROG X570", price: 300, img: "images/x570.jpg" },
    { name: "MSI B550", price: 180, img: "images/b550.jpg" },
    { name: "Gigabyte Z690", price: 220, img: "images/z690.jpg" },
    { name: "ASRock B450", price: 150, img: "images/b450.jpg" },
    { name: "ASUS TUF X670", price: 250, img: "images/x670.jpg" },
    { name: "MSI MEG Z590", price: 270, img: "images/z590.jpg" },
  ],
  memory: [
    { name: "Corsair 16GB DDR4", price: 80, img: "images/corsair-ddr4.jpg" },
    { name: "G.SKILL 32GB DDR4", price: 140, img: "images/gskill-ddr4.jpg" },
    { name: "Kingston 16GB DDR5", price: 120, img: "images/kingston-ddr5.jpg" },
    { name: "TeamGroup 32GB DDR5", price: 200, img: "images/teamgroup-ddr5.jpg" },
  ],
  storage: [
    { name: "Samsung 1TB SSD", price: 100, img: "images/samsung-1tb.jpg" },
    { name: "WD 2TB HDD", price: 60, img: "images/wd-2tb.jpg" },
    { name: "Seagate 1TB HDD", price: 55, img: "images/seagate-1tb.jpg" },
    { name: "Crucial 500GB SSD", price: 50, img: "images/crucial-500.jpg" },
    { name: "Samsung 2TB SSD", price: 180, img: "images/samsung-2tb.jpg" },
    { name: "WD 1TB SSD", price: 120, img: "images/wd-1tb.jpg" },
  ],
};

let cart = [];

function addToCart(category, index, quantity) {
  if (index < 0) return;
  const item = components[category][index];
  const existing = cart.find((c) => c.name === item.name);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }
  updateTable();
}

function updateTable() {
  const table = document.getElementById("cartTable");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${item.img}" alt="${item.name}" style="width: 60px; height: auto; vertical-align: middle;"> ${item.name}</td>
      <td>$${item.price}</td>
      <td>${item.quantity}</td>
      <td>$${item.price * item.quantity}</td>
    `;
    tbody.appendChild(row);
    total += item.price * item.quantity;
  });

  document.getElementById("totalPrice").textContent = `Total: $${total}`;
}

function proceedToCheckout() {
  localStorage.setItem("currentOrder", JSON.stringify(cart));
  window.location.href = "checkout.html";
}

function saveFavourite() {
  localStorage.setItem("favouriteOrder", JSON.stringify(cart));
  alert("Order saved as favourite.");
}

function applyFavourite() {
  const favourite = JSON.parse(localStorage.getItem("favouriteOrder"));
  if (favourite) {
    cart = favourite;
    updateTable();
    alert("Favourite order applied.");
  } else {
    alert("No favourite order found.");
  }
}

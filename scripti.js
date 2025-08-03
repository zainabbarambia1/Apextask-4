const products = [
  {
    name: "Smartphone",
    category: "electronics",
    price: 1299,
    rating: 4.9,
    image: "images/smartphone.jpg"
  },
  {
    name: "Nike Shoes",
    category: "fashion",
    price: 120,
    rating: 4.6,
    image: "images/nike-shoes.jpg"
  },
  {
    name: "MacBook",
    category: "electronics",
    price: 1099,
    rating: 4.8,
    image: "images/macbook.jpg"
  },
  {
    name: "Denim Jacket",
    category: "fashion",
    price: 85,
    rating: 4.4,
    image: "images/denim-jacket.jpg"
  },
  {
    name: "Atomic Habits",
    category: "books",
    price: 18,
    rating: 4.7,
    image: "images/book.jpg"
  },
  {
    name: "Headphones",
    category: "electronics",
    price: 349,
    rating: 4.5,
    image: "images/headphones.jpg"
  }
];

const grid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const sortOptions = document.getElementById("sortOptions");

function displayProducts(items) {
  grid.innerHTML = "";
  items.forEach(product => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <p>Rating: ⭐ ${product.rating}</p>
      </div>
    `;
  });
}

function filterAndSort() {
  let filtered = [...products];

  const category = categoryFilter.value;
  const sortBy = sortOptions.value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sortBy === "price-low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high-low") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating-high-low") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSort);
sortOptions.addEventListener("change", filterAndSort);

window.onload = () => displayProducts(products);
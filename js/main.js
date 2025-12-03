document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
    const hamburger = mobileMenuBtn.querySelector(".hamburger");

    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("active");
      if (hamburger) hamburger.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    const closeMenu = () => {
      mobileMenu.classList.remove("active");
      if (hamburger) hamburger.classList.remove("active");
      document.body.style.overflow = "";
    };

    closeMenuBtn.addEventListener("click", closeMenu);
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) closeMenu();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
        closeMenu();
      }
    });
  }

  // Car Image Carousel
  const cars = document.querySelectorAll(".car-image");
  if (cars.length > 0) {
    let current = 0;
    cars[current].classList.add("active");
    setInterval(() => {
      cars[current].classList.remove("active");
      current = (current + 1) % cars.length;
      cars[current].classList.add("active");
    }, 3000);
  }

  // Render Products
  const productsContainer = document.querySelector(".products-grid");
  if (productsContainer) {
    productsContainer.innerHTML = "";
    products.slice(0, 8).forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = `product-card ${
        product.featured ? "featured" : ""
      }`;
      productCard.innerHTML = `
        <div class="product-image">
          <img src="${product.image}" alt="${product.alt}" />
        </div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <div class="earn-badge">
          <span class="gift-icon">🎁</span>
          <span class="earn-text">Earn <strong>${product.coins}</strong> with this item!</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-detail">View detail</button>
          <button class="btn btn-add-cart">Add to Cart</button>
        </div>
      `;
      productsContainer.appendChild(productCard);
    });
  }

  // Render Categories
  const categoriesContainer = document.querySelector(".categories-grid");
  if (categoriesContainer) {
    categoriesContainer.innerHTML = "";
    categories.forEach((category) => {
      const categoryCard = document.createElement("div");
      categoryCard.className = "category-card";
      categoryCard.innerHTML = `
        <div class="category-icon">${category.icon}</div>
        <div class="category-name">${category.name}</div>
      `;
      categoriesContainer.appendChild(categoryCard);
    });
  }

  // Render Flash Sale Products
  const flashSaleContainer = document.querySelector(
    ".flash-sale-section .products-grid"
  );
  if (flashSaleContainer) {
    flashSaleContainer.innerHTML = "";
    products.slice(0, 4).forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = `product-card ${
        product.featured ? "featured" : ""
      }`;
      productCard.innerHTML = `
        <div class="product-image">
          <img src="${product.image}" alt="${product.alt}" />
        </div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <div class="earn-badge">
          <span class="gift-icon">🎁</span>
          <span class="earn-text">Earn <strong>${product.coins}</strong> with this item!</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-detail">View detail</button>
          <button class="btn btn-add-cart">Add to Cart</button>
        </div>
      `;
      flashSaleContainer.appendChild(productCard);
    });
  }

  // Render Top Selling Products
  const topSellingContainer = document.querySelector(".top-selling-grid");
  if (topSellingContainer) {
    topSellingContainer.innerHTML = "";
    products.slice(0, 6).forEach((product, index) => {
      const topSellingCard = document.createElement("div");
      topSellingCard.className = `top-selling-card ${
        index === 0 ? "featured" : ""
      }`;
      topSellingCard.innerHTML = `
        <div class="top-selling-image-wrapper">
          <img src="${product.image}" alt="${product.alt}">
        </div>
        <div class="top-selling-details">
          <div>
            <div class="top-selling-name">${product.name}</div>
            <div class="top-selling-price">${product.price}</div>
            <div class="top-selling-badge">
              <span class="top-selling-badge-icon">🎁</span>
              <span>Earn ${product.coins} Coin with this item!</span>
            </div>
          </div>
          <div class="top-selling-actions">
            <button class="top-selling-btn top-selling-btn-detail">View detail</button>
            <button class="top-selling-btn top-selling-btn-cart">Add to Cart</button>
          </div>
        </div>
      `;
      topSellingContainer.appendChild(topSellingCard);
    });
  }

  // Render Shop Interface Products
  const shopContainer = document.querySelector(".products-grid-1");
  if (shopContainer) {
    shopContainer.innerHTML = "";
    products.forEach((product, index) => {
      const productCard = document.createElement("div");
      productCard.className = `product-card-1 shop--interface-container-${
        index + 1
      } ${index === 0 ? "featured" : ""}`;
      productCard.id = `shop--interface-container-${index + 1}`;
      productCard.innerHTML = `
        <div class="product-image shop--interface-container-${
          index + 1
        }__image">
          <img src="${product.image}" alt="${product.alt}">
        </div>
        <div class="product-name shop--interface-container-${
          index + 1
        }__name">${product.name}</div>
        <div class="product-price shop--interface-container-${
          index + 1
        }__price">${product.price}</div>
        <div class="reward-badge shop--interface-container-${index + 1}__badge">
          <span class="coin-icon">🎁</span>
          Earn ${product.coins} with this item!
        </div>
      `;
      shopContainer.appendChild(productCard);
    });
  }
});

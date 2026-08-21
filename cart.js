function getItems() {
    return JSON.parse(localStorage.getItem("itemsData")) || [];
}

function getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(itemId) {
    const items = getItems();
    const cart = getCart();
    const item = items.find(product => product.id == itemId);
    
    if (!item) {
        console.error("Item not found");
        return;
    }
    
    const existingItem = cart.find(cartItem => cartItem.id == itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }
    
    saveCart(cart);
    
    showNotification(`${item.name} added to cart!`);
    
    if (window.location.pathname.includes("cart.html")) {
        displayCart();
    }
}

function removeFromCart(itemId) {
    const cart = getCart();
    const filteredCart = cart.filter(item => item.id != itemId);
    saveCart(filteredCart);
    displayCart();
    showNotification("Item removed from cart");
}

function updateQuantity(itemId, quantity) {
    if (quantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    const cart = getCart();
    const item = cart.find(cartItem => cartItem.id == itemId);
    
    if (item) {
        item.quantity = quantity;
        saveCart(cart);
        displayCart();
    }
}

function calculateSubtotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function displayCart() {
    const cart = getCart();
    const cartItemsContainer = document.getElementById("cartItems");
    const subtotalElement = document.querySelector(".cart h4");
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p style='font-size: 18px; margin-top: 20px;'>Your cart is empty</p>";
        if (subtotalElement) {
            subtotalElement.innerHTML = "Subtotal: $0";
        }
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">$${item.price}</p>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <div class="cart-item-total">
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join("");
    
    const subtotal = calculateSubtotal();
    if (subtotalElement) {
        subtotalElement.innerHTML = `Subtotal: $${subtotal.toFixed(2)}`;
    }
}

function showNotification(message) {
    let notification = document.getElementById("cartNotification");
    if (!notification) {
        notification = document.createElement("div");
        notification.id = "cartNotification";
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: #762e3f;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-size: 16px;
            font-weight: bold;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s;
        `;
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.style.opacity = "1";
    
    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => {
            notification.textContent = "";
        }, 300);
    }, 2000);
}

if (window.location.pathname.includes("cart.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        displayCart();
        
        const checkoutBtn = document.getElementById("checkout");
        if (checkoutBtn) {
            checkoutBtn.addEventListener("click", () => {
                const cart = getCart();
                if (cart.length === 0) {
                    alert("Your cart is empty!");
                    return;
                }
                alert("Proceeding to checkout...");
            });
        }
        
        const confirmBtn = document.getElementById("Confirm");
        if (confirmBtn) {
            confirmBtn.addEventListener("click", () => {
                const cart = getCart();
                if (cart.length === 0) {
                    alert("Your cart is empty!");
                    return;
                }
                
                const fullName = document.getElementById("full").value;
                const phone = document.getElementById("num").value;
                const email = document.getElementById("email").value;
                
                if (!fullName || !phone || !email) {
                    alert("Please fill in all required delivery details");
                    return;
                }
                
                alert("Order confirmed! Thank you for your purchase.");
                saveCart([]);
                displayCart();
            });
        }
    });
}


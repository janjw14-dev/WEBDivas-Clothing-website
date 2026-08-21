let items = JSON.parse(localStorage.getItem("itemsData"));

const id = localStorage.getItem("selectedID"); 
const item = items.find(product => product.id == id);

function openDetails(id) {
    localStorage.setItem("selectedID", id);
    window.location.href = "items.html";
  }
  

if (item) {
    document.getElementById("name").innerText = item.name;
    document.getElementById("price").innerText = "Price: " + item.price + "$";
    document.getElementById("material").innerText = "Material: " + item.material;
    document.getElementById("description").innerHTML = "Description: " + item.description;
    document.getElementById("image").src = item.image;

     if (Array.isArray(item.colors)) {
        document.getElementById("colors").innerText = "Colors: " + item.colors.join(", ");
    } else {
        document.getElementById("colors").innerText = "Color: " + item.colors;
    };

    if (item.length) {
        document.getElementById("length").innerText = "Length: " + item.length;
    };
    if (Array.isArray(item.sizes)) {
        document.getElementById("size").innerText = "Sizes: " + item.sizes.join(", ");
    } else if (item.sizes) {
        document.getElementById("size").innerText = "Size: " + item.sizes;
    };
    

    const addToCartBtn = document.getElementById("cart");
    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            addToCart(item.id);
        });
    }
}





    
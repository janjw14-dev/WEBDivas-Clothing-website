const itemsearch = document.getElementById('itemsearch');
    itemsearch.addEventListener('keyup', e => {
      let currentitems = e.target.value.toLowerCase();
      const itemsearch1 = document.querySelectorAll('.citems , .aitems , .bitems')
      itemsearch1.forEach(search => {
        if (search.textContent.toLowerCase().includes(currentitems)) {
            search.style.display = 'block';
        } else {
            search.style.display = 'none';
        }
      } )
    })


document.addEventListener("DOMContentLoaded", () => {

    const addToCartButtons = document.querySelectorAll(".citems button, .aitems button, .bitems button");
    
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", (e) => {
            e.stopPropagation(); 
            
            const container = button.closest(".citems, .aitems, .bitems");
            if (!container) return;
            
       
            const img = container.querySelector("img");
            if (!img || !img.onclick) return;

            const onclickAttr = img.getAttribute("onclick");
            if (!onclickAttr) return;
            
            const match = onclickAttr.match(/openDetails\((\d+)\)/);
            if (!match) return;
            
            const itemId = parseInt(match[1]);
            
            if (typeof addToCart === "function") {
                addToCart(itemId);
            } else {
                console.error("addToCart function not found. Make sure cart.js is loaded.");
            }
        });
    });
});


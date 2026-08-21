const API_URL = "https://692440793ad095fb847360cd.mockapi.io/api/delicate/items";

const tbody = document.getElementById("tbody-data");

const addBtn = document.getElementById("add-btn"); 
const cancelBtn = document.getElementById("cancel-btn"); 
const modal = document.getElementById("model"); 
const modalTitle = document.getElementById("model-title"); 
const nameInp = document.getElementById("name"); 
const categInp = document.getElementById("Category"); 
const remainedInp = document.getElementById("num"); 
const saveBtn = document.getElementById("save-btn");


let editId = null;

addBtn.addEventListener("click", () => {
  modalTitle.textContent = "Add Item";
  nameInp.value = ""; 
  categInp.value = ""; 
  remainedInp.value = ""; 
  modal.style.display = "flex"; 
});

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


saveBtn.addEventListener("click", async () => {
  const name = nameInp.value; 
  const category = categInp.value; 
  const remained = remainedInp.value; 
  const item = { name, category, remained };
  saveBtn.disabled = true; 

  
  if (!name || !category || !remained) {
    alert("Please fill all fields");
    saveBtn.disabled = false; 
    return;
  }

  
  try {
    
    if (editId) {
      await fetch(`${API_URL}/${editId}`, {
        method: "PUT", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item), 
      });

      
    } else {
      await fetch(`${API_URL}`, {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item), 
      });
    }

    modal.style.display = "none"; 
    editId = null; 
    fetchItems(); 
  } catch (error) {
    console.error("Failed to Add item: " + error); 
  } finally {
    saveBtn.disabled = false; 
  }
});


async function fetchItems() {
  try {
    const res = await fetch(API_URL); 
    const data = await res.json(); 
    renderTable(data); 
  } catch (error) {
    console.error("Error when fetch Items"); 
  }
}


function renderTable(items) {
  tbody.innerHTML = ""; 


  if (items.length === 0) {
    tbody.innerHTML =
      '<tr><td colspan="5" style="text-align:center; color:black;">NO ITEMS YET..</td></tr>';
  } else {
    
    items.forEach((items) => {
      const row = document.createElement("tr");

      
      row.innerHTML = `
                <td>${items.id}</td>      
                <td>${items.name}</td>    
                <td>${items.category}</td>     
                <td>${items.remained}</td>   
                <td>
                    
                    <button class="edit-btn" onclick="editItem('${items.id}')" > Edit</button>
                    <button class="delete-btn" onclick="deleteItem('${items.id}')"> Delete</button>
                </td>
            `;
      tbody.appendChild(row); 
    });
  }
}


async function deleteItem(id) {
  
  if (confirm("Are you sure delete item with id " + id)) {
    try {
      
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchItems();
    } catch (error) {
      console.error("Failed to delete item: " + error); 
    }
  }
}

async function editItem(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`); 
    const itemData = await res.json(); 
    modalTitle.textContent = "Edit Item";
    nameInp.value = itemData.name; 
    categInp.value = itemData.category; 
    remainedInp.value = itemData.remained; 
    editId = id; 
    modal.style.display = "flex"; 
  } catch (error) {
    console.error("Failed to fetch item: " + error); 
  }
}


fetchItems();
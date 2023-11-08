const FORM_CLASS = "mascotas-form";
const DELETE_BTN_CLASS = "eliminar-btn";
const ADD_BTN_ID = "add-btn";
const DELETE_PET_BTN_CLASS = "delete-pet";
const HIDE_ADD_BTN_CSS = "hideAddBtn";
let id = 0;

const addButton = document.getElementById(ADD_BTN_ID);

const clearUrlInput = () => {
    document.getElementById("url-input").value = "";
}

addButton.addEventListener('click', _ => {
    const url = document.getElementById("url-input").value;
    if (id >= 6 || !url) {
        return;
    }
    if (addButton.classList.contains(HIDE_ADD_BTN_CSS)) {
        addButton.classList.remove(HIDE_ADD_BTN_CSS);
    }
    id++;
    const newImage = `
        <div class="pet" id="pet-${id}">
            <img src="${url}" alt="Foto de una mascota" width="300" height="300" class="pet-foto"/>
            <button class="delete-pet" id="${id}">Eliminar</button>
        </div>
    `;
    $("#mascotas-container").append(newImage);
    alert("Nueva mascota agregada!");
    if (id >= 6) {
        addButton.classList.add(HIDE_ADD_BTN_CSS);
        return;
    }
    clearUrlInput();
});

const petContainer = document.getElementById("mascotas-container");

petContainer.addEventListener('click', e => {
    if (e.target.className !== DELETE_PET_BTN_CLASS) {
        return;
    }
    if (id <= 6 && addButton.classList.contains(HIDE_ADD_BTN_CSS)) {
        addButton.classList.remove(HIDE_ADD_BTN_CSS);
    }
    const petId = `#pet-${e.target.id}`;
    $(petId).remove();
    id--;
});

const removeBtn = document.getElementById("remove-btn");

removeBtn.addEventListener('click', e => {
    clearUrlInput();
});


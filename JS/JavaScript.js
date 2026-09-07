/*boton menu hamburguesa*/

let menu = document.querySelector("#menu");
let menu_bar = document.querySelector("#menu-bar");

menu_bar.addEventListener("click", () => {
    menu.classList.toggle("menu-toggle");
});

/*boton read more*/

const readMoreBtn = document.getElementById("readMoreBtn");
const infoModal = document.getElementById("infoModal");
const closeBtn = document.getElementById("closeBtn");

readMoreBtn.addEventListener("click", () => {
    infoModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    infoModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === infoModal) {
        infoModal.style.display = "none";
    }
});
//boton menu hamburguesa

let menu = document.querySelector("#menu");
let menu_bar = document.querySelector("#menu-bar");

menu_bar.addEventListener("click", () => {
    menu.classList.toggle("menu-toggle");
});

//boton read more

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
    if (event.target === infoModal) {   /*el event.target sirve pars saber que el usuario si hizo click en el infomodal y no en otro lado*/
        infoModal.style.display = "none";
    }
});

//boton informacion de las tallas

const infoTallasBtn = document.querySelectorAll(".infoTallasBtn");
const tallasModal = document.getElementById("tallasModal");
const closeTallasBtn = document.getElementById("closeTallasBtn");
const imagenModal = document.getElementById("imagenModal");

for (let i = 0; i < infoTallasBtn.length; i++) {

    infoTallasBtn[i].addEventListener("click", () => {
        const imagenDorsalModal = infoTallasBtn[i].querySelector(".camisaOculta");  
        imagenModal.src = imagenDorsalModal.src;  //se obtiene la imagrn oculta con src y se asigna a imagenModal y se muestra
        tallasModal.style.display = "flex";
    });
}

closeTallasBtn.addEventListener("click", () => {
    tallasModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === tallasModal) {
        tallasModal.style.display = "none";
    }
});

//barra de búsqueda del inicio

const input = document.getElementById("barraBusqueda");
const productos = document.querySelectorAll("#catalogo .container");

input.addEventListener("input", () => {
    const busqueda = input.value.toLowerCase();

    for (let i = 0; i < productos.length; i++) {
        const productoEncontrado = productos[i];
        const nombreProducto = productoEncontrado.querySelector("h2").textContent.toLowerCase();

        if (nombreProducto.includes(busqueda)) {
            productoEncontrado.style.display = "flex";

        } else {
            productoEncontrado.style.display = "none";
        }
    }
});

//Slider hero

const heroSlider = document.querySelector('.hero-slider');
const slides = document.querySelectorAll('.slide-content');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;   //este es el contador de las imagenes
const totalSlides = slides.length;

function moverSlider() {
    heroSlider.style.transform = `translateX(-${currentIndex * 100}%)`; //mueve el slider de izqui. a derecha y multiplica la poscicion por -100 para moverse
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    moverSlider();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    moverSlider();
});


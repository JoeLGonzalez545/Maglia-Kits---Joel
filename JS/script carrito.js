const PRECIO_FIJO = 180000;

const catalogoCamisetas = [
    // --- MUNDIAL 2026 ---
    { categoria: "grid-2026", nombre: "Jersey España 2026", imagen: "https://velocitysavage.com/cdn/shop/files/camiseta-espana-2026-campeon-del-mundo-velocity-savage-7482969.png?v=1785392899" },
    { categoria: "grid-2026", nombre: "Jersey Francia 2026", imagen: "https://www.sportline.com.co/media/catalog/product/i/b/ib5300-480_phsfh001-2000.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:" },
    { categoria: "grid-2026", nombre: "Jersey Brasil 2026", imagen: "https://www.sportline.com.co/media/catalog/product/i/f/if7054-724_phsfh001-2000.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:" },
    { categoria: "grid-2026", nombre: "Jersey Alemania 2026", imagen: "https://www.sportline.com.co/media/catalog/product/k/d/kd8363_apparel-front-center-view.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:" },
    { categoria: "grid-2026", nombre: "Jersey Colombia <br> 2026", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8G35yTL7vMeQRIyjSJxDITF63tl2o-eOkP_H8e1fxQ&s=10" },
    { categoria: "grid-2026", nombre: "Jersey Argentina <br> 2026", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuEsVZIa6Kv9jVV7hBOCxW-dTbRS1Ecb4Hdle4jEzqZw&s=10" },
    { categoria: "grid-2026", nombre: "Jersey Cabo Verde <br> 2026", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRHrmxchuTk0Q-VdFidvE6I5-byUxRT7nyvHOdY3WNQ&s=10" },
    { categoria: "grid-2026", nombre: "Jersey Portugal <br> 2026", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTWW9yZ96MlXyYDlGt1-pwsqekPYzil7eawPU3FItzw&s=10" },

    // --- MUNDIAL 2022 ---
    { categoria: "grid-2022", nombre: "Jersey Argentina 2022", imagen: "https://media.revistagq.com/photos/63a30480f9efb0668e8069e6/master/w_1600%2Cc_limit/adidas-Argentina-22-Messi-Home-Jersey-White-Light-Blue.jpg" },
    { categoria: "grid-2022", nombre: "Jersey Francia <br> 2022", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjZJeEptY0kkU-KSQyyp9-lDVOxv1Q1H9U78AVeyR9gUMCzveFfd_bdP-&s=10" },
    { categoria: "grid-2022", nombre: "Jersey Inglaterra 2022", imagen: "https://i5.walmartimages.com/asr/6546e444-74ff-47f3-8b54-ae94e7ef5612.0069040e069bd3f70a73a7a4e3bd81ea.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF&format=avif" },
    { categoria: "grid-2022", nombre: "Jersey Marruecos 2022", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GtExxsIrb0VqkV-PaoVapZnYKRJSBOuUr0IVxHNqBhP0yXMb-KOcnqk&s=10" },
    { categoria: "grid-2022", nombre: "Jersey Japón <br> 2022", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGNXagVG7q4pk1oNw3hI0VHkw1OaopyL42iNzjQdS7w&s=10" },
    { categoria: "grid-2022", nombre: "Jersey Senegal <br> 2022", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1geNYWpMjf-yc3Ja0GcbBs8990-Pobd3Ezzx0DcGUQ&s=10" },
    { categoria: "grid-2022", nombre: "Jersey Brasil <br> 2022", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3BnJo_cenqTih6CT8wrYcix9QJ6OZ2qpa6nHFCNy-g&s=10" },
    { categoria: "grid-2022", nombre: "Jersey Polonia <br> 2022", imagen: "https://stefanssoccer.com/cdn/shop/files/DN0700-100-PHSFH001_clipped_rev_1.png?v=1759950740&width=990" },

    // --- MUNDIAL 2018 ---
    { categoria: "grid-2018", nombre: "Jersey Francia <br> 2018", imagen: "https://media.revistagq.com/photos/5ca5f409bda594624333db38/master/w_1600%2Cc_limit/nike_francia_camiseta_1143.jpg" },
    { categoria: "grid-2018", nombre: "Jersey Croacia <br> 2018", imagen: "https://camisetasfutbolymas.com/wp-content/uploads/2026/04/croacia-18-local.webp" },
    { categoria: "grid-2018", nombre: "Jersey Bélgica <br> 2018", imagen: "https://thumblr.uniid.it/product/182727/15f63f7bb897.jpg?width=3840&format=webp&q=75" },
    { categoria: "grid-2018", nombre: "Jersey Inglaterra 2018", imagen: "https://i.pinimg.com/736x/0c/a9/b1/0ca9b1f026d65b19919ff31b4b203d01.jpg" },
    { categoria: "grid-2018", nombre: "Jersey Nigeria <br> 2018", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDpTDWZ2XcuBRdkIHYQcgfweJMcl75CoZNhV1-yoPIw&s=10" },
    { categoria: "grid-2018", nombre: "Jersey Colombia <br> 2018", imagen: "https://resources.claroshop.com/medios-plazavip/t1/17156562052693329jpeg" },
    { categoria: "grid-2018", nombre: "Jersey Alemania <br> 2018", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLJfy2gniELkiTtC1NFVNOeF1jyD2rjTAegmny5wFcQ&s=10" },
    { categoria: "grid-2018", nombre: "Jersey Japón <br> 2018", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgY9DlaIiOf5QE95DrCUgS7GO8XKDxl-ngxrEsyFheA&s=10" },

    // --- MUNDIAL 2014 ---
    { categoria: "grid-2014", nombre: "Jersey Alemania <br> 2014", imagen: "https://i.pinimg.com/736x/ff/9b/1b/ff9b1bb63265a102fe21ce77d78f0efb.jpg" },
    { categoria: "grid-2014", nombre: "Jersey Argentina  2014", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErE1ndes2oQqGyvjc-ALEaZ462k4nAHCjTNpl8W3z4g&s=10" },
    { categoria: "grid-2014", nombre: "Jersey Colombia <br> 2014", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQog09c1MnoP1rUEkTd5y4o05R7V-pUW9WqwkXt3AF5bpm7XOTLyHsLK-&s=10" },
    { categoria: "grid-2014", nombre: "Jersey Holanda <br> 2014", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxA9GHc_H4RpI88R2cCAmVTEMdF1dgQMxuluY2sxcR-Q&s=10" },
    { categoria: "grid-2014", nombre: "Jersey Brasil <br> 2014", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UiBdJJHgN-cTkVyR3vhFPqIR3uJxXYRnec-KZ5BEGQ&s=10" },
    { categoria: "grid-2014", nombre: "Jersey Costa Rica 2014", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbOspTKonhZ_8Kcka6rCB8Wj68LztNkSNhhtSE9Xtzg&s=10" },
    { categoria: "grid-2014", nombre: "Jersey Francia <br> 2014", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAoMj_IIvYdkqoN6XO_iP_dbkDYdU1YB8k5e_Is-cbQ&s=10" },
    { categoria: "grid-2014", nombre: "Jersey Chile <br> 2014", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe83Q-vlMONucIxlCtoshRQe88NY7Jtdv7CjeYwaltpg&s=10" },

    // --- MUNDIAL 2010 ---
    { categoria: "grid-2010", nombre: "Jersey España 2010", imagen: "https://futgod90.com/cdn/shop/files/ESPANA2010.png?v=1752104940" },
    { categoria: "grid-2010", nombre: "Jersey Holanda 2010", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVdondDT-Ue7_KD9aP0arDYmttMr-ioiX6l8Qjnotvw&s=10" },
    { categoria: "grid-2010", nombre: "Jersey Alemania 2010", imagen: "https://www.classicfootballshirts.co.uk/cdn-cgi/image/fit=pad,q=70,f=webp//pub/media/catalog/product//2/8/281125840650-1_w8x0vsx7vgmzi2sz.jpg" },
    { categoria: "grid-2010", nombre: "Jersey Uruguay 2010", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsW1ug1_HvdgUzYWZntf-I6APtZIxNvScpS-w_F5FvIUFG1TnqkfiPMVE&s=10" },
    { categoria: "grid-2010", nombre: "Jersey Sudáfrica <br> 2010", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4QQjlXI317gzLsw3yzfNNGoAIlrOX_3QhTCnLeenvw&s=10" },
    { categoria: "grid-2010", nombre: "Jersey Ghana <br> 2010", imagen: "https://www.classicfootballshirts.co.uk/cdn-cgi/image/fit=contain,q=70,w=1024,h=1024,f=webp/pub/media/catalog/product//6/9/6990cd0c79aa35fe795d271752a08c0ff0edd2ca87cd44de654a6a8556c11ec0.jpeg" },
    { categoria: "grid-2010", nombre: "Jersey Argentina 2010", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6MDwahT9gRsgXZTlpu_SWnHQXfkJt-MOjBk1KmMYVA&s=10" },
    { categoria: "grid-2010", nombre: "Jersey Brasil <br> 2010", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoa7BZ3ZHP_8X94lsafBUKnbkX3O76BNpdF8nJNQmYdg&s=10" },

    // --- KITS RETRO ---
    { categoria: "grid-retro", nombre: "Retro Brasil 1970", imagen: "https://italiansportswearcollection.com/cdn/shop/files/1970BrazilHomeJerseyPele_10.jpg?v=1763885768&width=1800" },
    { categoria: "grid-retro", nombre: "Retro Germany 1974", imagen: "https://www.vintagefootballclub.com/wp-content/uploads/2024/12/deutschland-1974-1.jpg.webp" },
    { categoria: "grid-retro", nombre: "Retro Argentina 1986", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJu16KyPvppimZpjjeyqaJYbweLRoGGx1YQwQKG3fRlQ&s=10" },
    { categoria: "grid-retro", nombre: "Retro Italy 1982", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3mV0QCsOfQG39A-FmyVOABIBHIpL0scDIULSMTCiSg&s=10" },
    { categoria: "grid-retro", nombre: "Retro Francia <br> 1998", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_832859-MCO102183004400_122025-F.webp" },
    { categoria: "grid-retro", nombre: "Retro Brasil <br> 2002", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3dHsEtmM8ugIjVrMhIWMhkxn8u-skmUd7fsRG2udq7Q&s=10" },
    { categoria: "grid-retro", nombre: "Retro Inglaterra <br> 1966", imagen: "https://i.pinimg.com/736x/05/10/0b/05100b39da224d5a0d64fb8546de52e1.jpg" },
    { categoria: "grid-retro", nombre: "Retro Italia <br> 2006", imagen: "https://theboutiquesoccer.com/cdn/shop/files/gratidao-instapost-208.png?v=1758406072&width=800" }
];

// 1. DIBUJAR TARJETAS
catalogoCamisetas.forEach((camiseta) => {
    const contenedor = document.getElementById(camiseta.categoria);
    if (contenedor) {
        contenedor.innerHTML += `
      <div class="tarjeta">
        <img src="${camiseta.imagen}" alt="${camiseta.nombre}" onclick="verGrande('${camiseta.imagen}')">
        <h4>${camiseta.nombre}</h4>
        <p class="precio">$${PRECIO_FIJO.toLocaleString("es-CO")}</p>
        <button class="btn-agregar" onclick="agregarAlCarrito('${camiseta.nombre}')">Agregar al carrito</button>
      </div>
    `;
    }
});

function verGrande(ruta) {
    document.getElementById("img-grande").src = ruta;
    document.getElementById("modal-imagen").style.display = "flex";
}

// 2. CARRITO SIMPLE
let carrito = [];

function agregarAlCarrito(nombre) {
    carrito.push(nombre);
    mostrarCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

function mostrarCarrito() {
    const lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";

    carrito.forEach((nombre, index) => {
        lista.innerHTML += `
      <div class="item-carrito">
        <span>${nombre} - $${PRECIO_FIJO.toLocaleString("es-CO")}</span>
        <button onclick="eliminarDelCarrito(${index})">X</button>
      </div>
    `;
    });

    const subtotal = carrito.length * PRECIO_FIJO;
    const envio = carrito.length > 0 ? 15000 : 0;

    document.getElementById("cantidad-carrito").textContent = carrito.length;
    document.getElementById("subtotal").textContent = ` $${subtotal.toLocaleString("es-CO")}`;
    document.getElementById("envio").textContent = ` $${envio.toLocaleString("es-CO")}`;
    document.getElementById("total").textContent = ` $${(subtotal + envio).toLocaleString("es-CO")}`;
}
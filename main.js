let carrito = [];

const productos = [
    { 
        nombre: "The Legend of Zelda: Breath of the Wild", 
        genero: "Aventura", 
        plataforma: "Nintendo Switch",
        imagen: "/assets/imagenes/zeldabotw.jpg",
        id:"1"
    },
    { 
        nombre: "God of War", 
        genero: "Acción", 
        plataforma: "PlayStation 4",
        imagen: "/assets/imagenes/gowps4.jpeg",
        id:"2"
    },
    { 
        nombre: "Halo Infinite", 
        genero: "Disparos en primera persona", 
        plataforma: "Xbox Series X",
        imagen: "/assets/imagenes/HaloInfinitex.jpg",
        id:"3"
    },
    { 
        nombre: "Minecraft", 
        genero: "Sandbox", 
        plataforma: "Multiplataforma",
        imagen: "/assets/imagenes/minecraft.jpg",
        id:"4"
    },
    { 
        nombre: "Cyberpunk 2077", 
        genero: "RPG", 
        plataforma: "Multiplataforma",
        imagen: "/assets/imagenes/cyberpunk_2077_PL.jpg",
        id:"5"
    }
];

function mostrarJuegos(productos) {
    const contenedor = document.getElementById("cards-container");

    productos.forEach((producto) => {
        const card = document.createElement("div");

        card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Género: ${producto.genero}</p>
        <p>Plataforma: ${producto.plataforma}</p>
        <button id="btn-${producto.id}">Agregar al carrito</button>
        `
        contenedor.appendChild(card);

        const boton = document.getElementById(`btn-${producto.id}`);

        boton.addEventListener("click", () => {
            agregarAlCarrito(producto);
            mostrarCarrito();
        });
        }
    )};

    mostrarJuegos(productos);

    function agregarAlCarrito(producto) {
        const productoExistente = carrito.find(item => item.id === producto.id);

        if (productoExistente) {
            productoExistente.cantidad += 1;
        } else {
            producto.cantidad = 1;
            carrito.push(producto);
        }
        
    };

    function mostrarCarrito(){
        const contenedorCarrito = document.getElementById("carrito-container");
        contenedorCarrito.innerHTML = "";

        carrito.forEach(item => {
            contenedorCarrito.innerHTML += `
            <p>${item.nombre}${item.cantidad}</p>`
        });
    };



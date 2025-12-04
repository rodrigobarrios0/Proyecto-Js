let carrito = [];

const productos = [
    { 
        nombre: "The Legend of Zelda: Breath of the Wild", 
        genero: "Aventura", 
        plataforma: "Nintendo Switch",
        imagen: "/assets/imagenes/zeldabotw.jpg",
        precio: "$19.99",
        id:"1"
    },
    { 
        nombre: "God of War", 
        genero: "Acción", 
        plataforma: "PlayStation 4",
        imagen: "/assets/imagenes/gowps4.jpeg",
        precio: "$24.99",
        id:"2"
    },
    { 
        nombre: "Halo Infinite", 
        genero: "Disparos en primera persona", 
        plataforma: "Xbox Series X",
        imagen: "/assets/imagenes/HaloInfinitex.jpg",
        precio: "$9.99",
        id:"3"
    },
    { 
        nombre: "Minecraft", 
        genero: "Sandbox", 
        plataforma: "Multiplataforma",
        imagen: "/assets/imagenes/minecraft.jpg",
        precio: "$9.99",
        id:"4"
    },
    { 
        nombre: "Cyberpunk 2077", 
        genero: "RPG", 
        plataforma: "Multiplataforma",
        imagen: "/assets/imagenes/cyberpunk_2077_PL.jpg",
        precio: "$59.99",
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
        <p>Precio: ${producto.precio}</p>
        <button id="btn-${producto.id}">Agregar al carrito</button>
        `
        contenedor.appendChild(card);

        const boton = document.getElementById(`btn-${producto.id}`);

        boton.addEventListener("click", () => {
            agregarAlCarrito(producto);
            mostrarCarrito();
            Toastify({
                text: "Producto agregado al carrito",
                gravity: "bottom",
                position: "right",
                style: {
                background: "linear-gradient(to right, #1c1f1eff, #272525ff)",
                border: "2px solid #473c1aff",
                },
                duration: 3000
            }).showToast();
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
    guardarCarrito();
};

function mostrarCarrito(){
    const contenedorCarrito = document.getElementById("carrito-container");
    contenedorCarrito.innerHTML = "";
    
    carrito.forEach(item => {
        contenedorCarrito.innerHTML += `
        <p>${item.nombre} x${item.cantidad}</p>
        `;
    });

    const totalCompra = calcularTotal();

    const divResumen = document.createElement('div');
    divResumen.innerHTML = `
        <h3>Total: $${totalCompra}</h3>
        <button id="vaciarCarritoBtn">Vaciar Carrito</button>
        <button>Comprar</button>
    `;
    
    const botonVaciar = divResumen.querySelector('#vaciarCarritoBtn');
    botonVaciar.addEventListener('click', () => {
        Swal.fire({
            title: "¿Desea vaciar el carrito?",
            theme: "dark",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ffbf00",
            cancelButtonColor: "rgba(53, 52, 52, 1)",
            confirmButtonText: "Vaciar"
        }).then((result) => {
            vaciarCarrito();
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Carrito vaciado",
                    theme: "dark",
                    text: "Tus productos han sido eliminados del carrito.",
                    confirmButtonColor: "#ffbf00",
                    icon: "success"
                });
            }
        });
    });
    contenedorCarrito.appendChild(divResumen);
};

function guardarCarrito(){ 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito(){
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado){
        carrito = JSON.parse(carritoGuardado) || [];
        mostrarCarrito();
    }
};

cargarCarrito();

function vaciarCarrito() {
    carrito.length = 0;
    guardarCarrito();
    mostrarCarrito();
};

/* functiom calcularTotal(){
    return carrito.reduce((total, item) => {
        const precioLimpio = parseFloat(item.precio.replace("$"," "));
        const subtotal = precioLimpio * item.cantidad;
        
        return total + subtotal;
        }, 0);
}; */

function calcularTotal(){
    return carrito.reduce((total, item) => total + (parseFloat(item.precio.replace("$"," ")) * item.cantidad), 0);
}


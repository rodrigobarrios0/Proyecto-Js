//Constantes
const Nombre_Tienda = "Café-JS";
const Tarifa_Envio = 500; 
const Envio_Gratis = 1000;

//Array menú
const Menu_cafe = [
    { id:1, nombre: "Espresso", precio: 1000 },
    { id:2, nombre: "Cappuccino", precio: 1600 },
    { id:3, nombre: "Latte", precio: 1300 },
    { id:4, nombre: "Mocha", precio: 1400 },
];

//Mostrar menú en consola
console.log(`--- Bienvenido a ${Nombre_Tienda} ---`);
console.log("Menú:");
Menu_cafe.forEach(cafe => {
    console.log(`ID ${cafe.id}: ${cafe.nombre} - $${cafe.precio}`);
});

console.log("---------------------------------");
//Función para recibir pedido

function MenuString(){
    let menutexto = "";
    const Nombres_cafes = Menu_cafe.length;
    
    for (let i = 0; i < Nombres_cafes; i++){
        const cafe = Menu_cafe[i];

        menutexto += `ID ${cafe.id}: ${cafe.nombre} - $${cafe.precio}\n`;
    }

    return menutexto;
};

function recibirPedido(){

    const menuPrompt = MenuString();
    let idCafe = 0;
    let cantidad = 0;

    let entradaValida = false;
    while(!entradaValida){
        let entrada = prompt(
            `Bienvenido a ${Nombre_Tienda}! \n\n` +
            `Ingrese el ID del café que desea ordenar (1 al 4) \n\n` + 
            menuPrompt
        );
    
        idCafe = parseInt(entrada);

        const cafeSeleccionado = Menu_cafe.find(cafe => cafe.id === idCafe);
        if (cafeSeleccionado) {
            cantidad = parseInt(prompt(`Ha seleccionado ${cafeSeleccionado.nombre}.\nPor favor, ingrese la cantidad deseada:`));
        
            if (cantidad > 0){
                entradaValida = true;
            } else {
                alert("La cantidad debe ser mayor a cero. Intente nuevamente.");
            }
        } else{
            alert("ID de café no valido. Por favor ingrese un número del 1 al 4");
        }
    }

    return { 
        idCafe: idCafe,
        cantidad: cantidad
    };
}

//Función para calcular total
function calcularTotal(pedido){
    const cafeElegido = Menu_cafe.find(cafe => cafe.id === pedido.idCafe);
    let subtotal = cafeElegido.precio * pedido.cantidad;

    let totalconEnvio = subtotal + Tarifa_Envio;
    console.log(`Subtotal: $${subtotal}. Se agrega envío de $${Tarifa_Envio}. Total: $${totalconEnvio}.`);
    return totalconEnvio;
}

//Funcion de Salida
function mostrarResumen(pedido, total){
    const cafe = Menu_cafe.find(cafe => cafe.id === pedido.idCafe);
    const nombreCafe = cafe ? cafe.nombre : "Error";

    console.log("\n--- Resumen del Pedido ---");
    console.log(`Usted ha pedido ${pedido.cantidad} unidad(es) de ${nombreCafe}.`);
    console.log(`Total a pagar: $${total}. Gracias por su compra en ${Nombre_Tienda}!`);

    alert(
        `Pedido Registrado\n\n` +
        `Articulo: ${nombreCafe} (x${pedido.cantidad})` +
        `Total a pagar: $${total}\n\n` +
        `Gracias por su compra en ${Nombre_Tienda}!`
    );
}

const pedido = recibirPedido();
console.log("Procesando su pedido...", pedido);

const costoFinal = calcularTotal(pedido);
console.log("Costo final calculado:", costoFinal);

mostrarResumen(pedido, costoFinal);
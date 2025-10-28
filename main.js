//Constantes
const Nombre_Tienda = "Café-JS";
const Tarifa_Envio = 500; 
const Envio_Gratis = 1000;

//Array menú
const Menu_cafe = [
    { id:1, nombre: "Espresso", precio: 300 },
    { id:2, nombre: "Cappuccino", precio: 400 },
    { id:3, nombre: "Latte", precio: 450 },
    { id:4, nombre: "Mocha", precio: 500 },
];

//Mostrar menú en consola
console.log(`--- Bienvenido a ${Nombre_Tienda} ---`);
console.log("Menú:");
Menu_cafe.forEach(cafe => {
    console.log(`ID ${cafe.id}: ${cafe.nombre} - $${cafe.precio}`);
});

console.log("---------------------------------");

//Función para recibir pedido
function recibirPedido(){
    let idCafe = 0;
    let cantidad = 0;

    let entradaValida = false;
    while(!entradaValida){
        let entrada = prompt(
            `Bienvenido a ${Nombre_Tienda}!/n/n`+
            `Ingrese el ID del café que desea ordenar (1 al 4)`
        );
    
        idcafe = parseInt(entrada);

        const cafeSeleccionado = Menu_cafe.find(cafe => cafe.id === idCafe);
        if (cafeSeleccionado) {
            cantidad = paseInt(prompt(`Ha seleccionado ${cafeSeleccinado.nombre}./nPor favor, ingrese la cantidad deseada:`));
        
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
        idcafe: idCafe,
        cantidad: cantidad
    };
}

//Función para calcular total
function calcularTotal(pedido){
    const cafeElegido = Menu_cafe.find(cafe => cafe.id === pedido.idCafe);
    let subtotal = cafeElegido.precio * pedido.cantidad;


}
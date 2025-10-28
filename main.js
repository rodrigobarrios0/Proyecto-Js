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

console.log(`--- Bienvenido a ${Nombre_Tienda} ---`);
console.log("Menú:");
Menu_cafe.forEach(cafe => {
    console.log(`ID ${cafe.id}: ${cafe.nombre} - $${cafe.precio}`);
});

console.log("---------------------------------");

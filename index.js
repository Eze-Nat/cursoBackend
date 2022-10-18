const fs = require("fs");

/* 
const date = Date.now();
const hoy = new Date(date)




try {
  fs.writeFileSync("./fyh.txt",`${hoy}`);

  const fechaEjercicio = fs.readFileSync("./fyh.txt", "utf-8");
} catch (e) {
  console.log("invalid");
}
 */

const productos = [
  { id: 1, nombre: `Escuadra`, precio: 323.45 },
  { id: 2, nombre: `Calculadora`, precio: 234.56 },
  { id: 3, nombre: `Globo Terráqueo`, precio: 45.67 },
  { id: 4, nombre: `Paleta Pintura`, precio: 456.78 },
  { id: 5, nombre: `Reloj`, precio: 67.89 },
  { id: 6, nombre: `Agenda`, precio: 78.9 },
];

/* let nombre = "";
let mayor = 0;


productos.forEach((element) => {
nombre = `${nombre}, ${elemente.nombre}`
total += element.precio;

  if (element.precio > mayor) {
    mayor = element.precio;
  }

});

console.log(nombre);
console.log(total);
console.log(total/productos.length);
console.log(mayor); */

const aux = [];
productos.forEach((e) => {
  aux.push(e.precio);
});

const menor = Math.min(...aux);
const mayor = Math.max(...aux);

const totalProductos = productos.reduce((acc, e) => acc + e.precio, 0);
const promedio = Math.round(totalProductos / productos.length);

console.log(
  totalProductos,
  `El promedio del valor es $${promedio}`,
  menor,
  mayor
);

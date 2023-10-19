const math = require("./math");
const persons = require("./person");
const color = require("./randomColor");
const circulo = require("./geometria/circulo");

console.log(math.sumar(1,2));
console.log(math.multiplicar(3,3));

console.log("Este es " + persons.paco.nombre);

let yo = persons.crearPersona("Manuel", "Sevilla", 19);

console.log("Yo soy " + yo.nombre + ", soy de " + yo.ciudad + " y tengo " + yo.edad + " anyos.");

yo.edad++;
console.log("En un anyo tendré " + yo.edad);

console.log("Esto es un número aleatorio: " + color.generarNuevoColor());

let radio = 20;
console.log("El radio de un ciculo es " + radio + ". Su circunferencia es: " + circulo.calcularCircunferencia(20) + ". Y su area es: " + circulo.calcularArea+ ".");

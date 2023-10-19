const animales = require("./animales");

let perro = animales.perro.perro;
let gato = animales.gato.gato;
let pajaro = animales.pajaro.pajaro;

console.log("Mi perro se llama "+perro.nombre+" y tiene "+perro.edad);
console.log("Mi gato se llama "+gato.nombre+" y tiene "+gato.edad);
console.log("Mi pajaro se llama "+pajaro.nombre+" y tiene "+pajaro.edad);

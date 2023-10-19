//hacemos npm install lodash
const lodash = require("lodash");

//Para coger el nombre del primer hermano de cada persona
var personas = [
    {
    "nombre": "Jose Luis",
    "hermanos": [{"nombre":"David"}, {"nombre": "Sonia"}]
},
{
    "nombre": "Alfonso Manuel",
    "hermanos": [{"nombre":"Gustavo"}, {"nombre": "Juan"}]
}
];

//Con el metodo .map de array
let hermanos_array = personas.map(function(item){
    return item.hermanos[0].nombre;
});
 // [ 'David', 'Gustavo' ]

//Con lodash
let hermanos_lodash = lodash.map(personas, 'hermanos[0].nombre');
// [ 'David', 'Gustavo' ]

console.log(hermanos_array);
console.log(hermanos_lodash);

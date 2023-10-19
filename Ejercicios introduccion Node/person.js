const paco = {
    nombre: "paco",
    ciudad: "Sevilla",
    edad: 30
}

function crearPersona (nombreP, ciudadP, edadP) {
    return {nombre: nombreP, ciudad: ciudadP, edad: edadP}
}

module.exports = {
    crearPersona,
    paco
}
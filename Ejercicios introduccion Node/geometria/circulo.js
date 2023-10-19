function calcularArea(radio) {
    let resultado;
    resultado = Math.PI * radio**2;
    return resultado;
}

function calcularCircunferencia(radio) {
    return 2*Math.PI*radio;
}


module.exports = {
    calcularCircunferencia,
    calcularArea
}

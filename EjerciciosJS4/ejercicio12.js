/* Realiza un script para buscar una fecha dentro de una cadena introducida por el usuario. */

function buscarFecha(texto) {
    let fecha = texto.match(/[0-9]{2}[/-][0-9]{2}[/-][0-9]{4}/);
    let resultado;
    if (fecha == null) {
        resultado = "No se encontró una fecha";
    } else {
        resultado = fecha[0];
    }

    return resultado;
}
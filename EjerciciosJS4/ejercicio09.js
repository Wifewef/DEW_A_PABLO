/* Analiza los diferentes métodos de string y crea 3 ejercicios aplicados donde el usuario deba intervenir. */


/* Haz una función que capitalice cada palabra de un texto */
function capitalizar(string) {
    return string.replace(/\w\S*/g, function (texto) {
        return texto.charAt(0).toUpperCase() + texto.substr(1).toLowerCase();
    });
}

/* Haz una función que concatene el string dado n veces */
function repeat(string, contador) {
    if (typeof (contador) == "undefined") {
        contador = 1;
    }
    return contador < 1 ? '' : new Array(contador + 1).join(string);
}
/* Haz una función que convierta un String en un array de palabras */
convertirStringArray = function (string) {
    return string.trim().split(" ");
};
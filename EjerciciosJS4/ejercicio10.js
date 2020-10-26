/* Analiza los diferentes métodos de arrays y crea 3 ejercicios aplicados donde el usuario deba intervenir. */

/* Haz un ejercicio que clone un array */

var clonarArray = function (array) {
    return array.slice(0);
};

/* Haz un ejercicio que borre los duplicados de un array */

function borrarDuplicados(numero) {
    let x, nuevoArray = [],
        obj = {};

    for (x = 0; x < numero.length; x++) {
        obj[numero[x]] = 0;
    }
    for (x in obj) {
        nuevoArray.push(x);
    }
    return nuevoArray;
}

/* Haz un ejercicio que devuelva los primeros n elementos de un array */

var obtenerPrimerosElementosArray = function (array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[0];
    if (n < 0)
        return [];
    return array.slice(0, n);
};
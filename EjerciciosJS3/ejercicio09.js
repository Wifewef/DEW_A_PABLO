/* Crear una función que devuelva el valor máximo y mínimo del array, 
e indique el índice de estos valores (si el valor se repite, informar sólo sobre la primera vez que aparezca). 
Probar con un array aleatorio de 20 números entre -100 y 100. */

function generarArrayControlado(numero = 10, valorMinimo = 100, valorMaximo = 200) {
    let array = [];

    for (let i = 0; i < numero; i++) {
        array.push(Math.floor(Math.random() * (valorMaximo - valorMinimo)) + valorMinimo);

    }
    //console.log(array);
    return array;
}

let numeros = generarArrayControlado(20, -100, 100);

function devolverMaxMinArray(numeros) {
    let min, max, indiceMin, indiceMax;
    if (!Array.isArray(numeros)) {
        console.log("Introduce un array");
    } else {
        for (let i = 0; i < numeros.length; i++) {
            if (typeof min === 'undefined' && typeof max === 'undefined') {
                min = numeros[i];
                max = numeros[i];
                indiceMin = i;
                indiceMax = i;
            }

            if (numeros[i] > max) {
                indiceMax = i;
                max = numeros[i];
            }

            if (numeros[i] < min) {
                indiceMin = i;
                min = numeros[i];
            }
        }
        console.log("Valor máximo: " + max + " \nValor mínimo: " + min + "\nÍndice de valor máximo: " + indiceMax + " \nÍndice de valor mínimo: " + indiceMin);
    }

}
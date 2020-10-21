/* Crear un array de 50 números aleatorios enteros aleatorios entre 10 y 20. 
Para cada elemento, informar si es la primera vez que aparece, o si se trata de un elemento repetido. */

function generarArrayControlado(numero = 10, valorMinimo = 100, valorMaximo = 200) {
    let array = [];

    for (let i = 0; i < numero; i++) {
        array.push(Math.floor(Math.random() * (valorMaximo - valorMinimo)) + valorMinimo);

    }
    //console.log(array);
    return array;
}

let numeros = generarArrayControlado(50, 10, 20);

function detectarElementosRepetidos(numeros) {
    let numerosExistentes = [];
    if (!Array.isArray(numeros)) {
        console.log("Introduce un array");
    } else {
        for (let i = 0; i < numeros.length; i++) {

            let mensaje = "\nEl índice " + i + " contiene el valor " + numeros[i] + ", el cual " + (numerosExistentes.includes(numeros[i]) ? "Está repetido en la lista" : "No había aparecido en la lista");
            if (!numerosExistentes.includes(numeros[i])) {
                numerosExistentes.push(numeros[i]);
            }
            console.log(mensaje);
        }
    }

}
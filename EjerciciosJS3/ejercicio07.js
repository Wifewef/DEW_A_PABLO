/* Recorrer un array aleatorio generado con la función del ejercicio 1 (15 elementos entre -10 y 20) y para cada elemento x, 
gestionar un nuevo array de la siguiente forma:

x <= -5: Eliminar el primer elemento del array
-5 < x <= 0: Eliminar el último elemento del array
0 < x <=  10: Añadir x al principio del array
10 < x <=  10: Añadir x al final del array

Mostrar un mensaje de texto para cada número indicando el valor de x, 
la operación realizada (eliminar o añadir, al principio o al final), 
el número añadido/eliminado y el tamaño del array tras realizar la operación */

function generarArrayControlado(numero = 10, valorMinimo = 100, valorMaximo = 200) {
    let array = [];

    for (let i = 0; i < numero; i++) {
        array.push(Math.floor(Math.random() * (valorMaximo - valorMinimo)) + valorMinimo);

    }
    //console.log(array);
    return array;
}

let numeros = generarArrayControlado(15, -10, 20);

let arrayGestionado = [];

function gestionarArray() {
    for (let numero of numeros) {
        let mensaje = "";
        if (numero <= -5) {
            let shift = arrayGestionado.shift();
            mensaje = "\nNúmero: " + numero + "\nOperación: Eliminar el primero \n Número eliminado: " + shift + "\n Tamaño array: " + arrayGestionado.length + " ";
        } else if (-5 < numero <= 0) {
            let pop = arrayGestionado.pop();
            mensaje = "\nNúmero: " + numero + "\nOperación: Eliminar el último \n Número eliminado: " + pop + "\n Tamaño array: " + arrayGestionado.length + " ";
        } else if (0 < numero <= 10) {
            arrayGestionado.unshift(numero);
            mensaje = "\nNúmero: " + numero + "\nOperación: Añadir el primero \n Número añadido: " + numero + "\n Tamaño array: " + arrayGestionado.length + " ";
        } else if (10 < numero <= 20) {
            arrayGestionado.push(numero);
            mensaje = "\nNúmero: " + numero + "\nOperación: Añadir el último \n Número añadido: " + numero + "\n Tamaño array: " + arrayGestionado.length + " ";
        }

        console.log(mensaje);
        console.log(arrayGestionado);
    }
}
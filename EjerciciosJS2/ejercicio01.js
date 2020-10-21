/* 1. Implementar el control de 3 variables (a, b, c) para que se muestre un mensaje de error cuando se produzca alguna de las siguientes situaciones (el mensaje de error debe indicar qué situación(es) no se cumplieron):

a) Al menos una de las 3 variables es negativa

b) Las tres variables son iguales a 0

c) Las suma de las 3 variables es mayor que 10 Y las tres variables son diferentes */

"use strict"

function controlar3Num(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        console.log("No pueden haber números negativos");
    }
    if (a === 0 || b === 0 || c === 0) {
        console.log("Las tres variables son 0");
    }

    if (a != b && a != c && b != c && (a + b + c) > 10) {
        console.log("La suma de las 3 variables es mayor que 10 y son todas diferentes");
    }

}

controlar3Num(3, 5, 4);
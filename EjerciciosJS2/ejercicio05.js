/* 5. La letra del NIF se calcula dividiendo la parte numérica (8 primeras cifras) por 23. A partir del resto de esta división se asigna una letra según su posición en la siguiente cadena: `'TRWAGMYFPDXBNJZSQVHLCKE'`.

Por ejemplo, el DNI 64253469 da como resto 2 al dividir por 23 (tercera posición, ya que empieza por 0), por lo que le corresponde la letra `W`.

Implementar una función que calcule la letra a partir del número del NIF. */

const LETRAS="TRWAGMYFPDXBNJZSQVHLCKE";

function calcularLetraDNI(dni){
    let numeros=dni.substring(0,8);
    let posLetra = numeros % 23;

    console.log("La letra de tu DNI es: "+LETRAS.charAt(posLetra));
}
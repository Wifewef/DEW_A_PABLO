/* Realiza un programa para probar si el primer carácter de una cadena introducida por el usuario está en mayúsculas o no. */

function comprobarPrimerCaracterMayuscula(texto){
    return ((texto.charAt(0) == texto.charAt(0).toUpperCase()) && (texto.charAt(0) != " ")) ? "Es mayúsculo" : "No es mayúsculo";
}
/* Escriba un programa para contar el número de palabras en una cadena.
- Elimine los espacios en blanco de la posición inicial y final.
- Convierta 2 o más espacios en 1.
- Excluya la nueva línea con un espaciado inicial.
*/

function contarPalabrasEnString(texto){
    return texto.trim().split(/\W+/).length;

}
/* En este reto deberás sumar números e imprimirlos por la consola. Para ello, deberás solicitar al usuario que introduzca 
2 números e imprimir el resultado por la consola. Este proceso deberás repetirlo 5 veces. */

let num, num2;

for(let i=0; i<5; i++){
    num = window.prompt("Introduce el primer número");
    num2 = window.prompt("Introduce el segundo número");

    console.log("El resultado de "+num+" + "+num2+" es "+(parseFloat(num)+parseFloat(num2)));
    console.log(i);
}
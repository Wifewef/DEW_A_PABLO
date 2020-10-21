/* En este reto deberás sumar el valor de 5 números naturales. Para ello, deberás solicitar al usuario que introduzca un número entero, 
calcular y sumar los 5 números siguientes e imprimir el resultado por la consola, y volver a repetir este proceso 5 veces más. */

let num, resultado;

for(let i=0; i<5; i++){
    num = parseInt(window.prompt("Introduce un número"));
    resultado= 0;
    for(let j=1; j<6; j++){
        resultado+=(num+j);
        
    }
    console.log(resultado);
}
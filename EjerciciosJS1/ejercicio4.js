/* En este reto deberás mostrar el número posterior a un número introducido por el usuario. 
Deberás solicitar al usuario que introduzca 3 números, y para cada uno de ellos imprimir el número posterior. */

let numeros=[];

for(let i=0; i<3; i++){
    numeros[i]= window.prompt("Introduce el número "+(i+1));
}

numeros.forEach(element => {
    console.log(parseInt(element)+1);
});
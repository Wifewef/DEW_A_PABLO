/* Usando un bucle, calcula el resultado de 15 elevado a la 6. No podrás utilizar el operador aritmético de elevar a una potencia.*/


let num = window.prompt("Introduce el número para hallar sus potencias", 15);
let potencia = 5;
let cheat = num;
console.log("El número es "+num)
for(let i=0; i<potencia; i++){
    num*=cheat;
    console.log(num);
}
/* Usando un bucle, calcula la suma de los 10 primeros números naturales, es decir, la suma de 1 + 2 + 3 ... + 10, 
e imprimir el resultado por la consola. Para ello deberás recorrer el bucle y almacenar el valor acumulado en cada iteración en una variable. */

let total = 0;

for(let i=1; i<=10; i++){
    total+=i;
}
console.log(total);

/*
let total = 0;
let i = 0;
while(i <= 10){
    total+=i;
    i++;
}

console.log(total);*/
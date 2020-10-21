/* 8.Genera una lista que contenga el cuadrado de los números pares y el cubo de los impares entre 1 y 100 (inclusive). */

let lista=[];

for(let i=1; i<=100; i++){
    
    if(i%2 != 0){
        lista.push(Math.pow(i, 3));
    }else{
        lista.push(Math.pow(i, 2));
    }
}
console.log(lista);
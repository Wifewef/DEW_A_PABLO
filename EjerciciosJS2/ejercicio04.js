/*
4. En el siguiente bucle while tenemos que tener cuidado porque hay operaciones que pueden dar error 
(no puede haber raíces cuadradas de números negativos, ni divisiones por cero).

let result = 1, arg1, arg2, res1, res2;

while (result > 0) {

  arg1 = Math.random() - 0.5;

  res1 = Math.sqrt(arg1);

  arg2 = Math.random();

  res2 = res1/(arg1 + arg2);

  result = res1 + res2;

  console.log(result);

}

a) Cambia el bucle while usando continue y break para que si hay una raíz cuadrada de un número negativo directamente pase a la siguiente iteración. 
En el caso de haber una división por cero, el bucle debe detenerse inmediatamente.

*/


let result = 1,
    arg1, arg2, res1, res2;

//Hago el contador para que no se cree un bucle infinito.
let i = 0;
while (i < 100) {


    arg1 = Math.random() - 0.5;

    if (arg1 < 0) {
        console.log("Raíz de número negativo, saltamos de iteración");
        continue;
    }
    res1 = Math.sqrt(arg1);

    arg2 = Math.random();

    if ((arg1 + arg2) == 0) {
        console.log("No se puede dividir por 0, salimos");
        break;
    }
    res2 = res1 / (arg1 + arg2);



    result = res1 + res2;
    i++;
    console.log(result);

}

//b) Prueba a realizar el apartado anterior sin usar ni continue ni break. ¿Es más sencillo?

/*
i = 0;
while (result > 0) {

    if (arg1 < 0) {
        console.log("Raíz de número negativo, saltamos de iteración");
        result = 1;
    } else if ((arg1 + arg2) == 0) {
        console.log("No se puede dividir por 0, salimos");
        result = 0;
    } else {
        arg1 = Math.random() - 0.5;
        res1 = Math.sqrt(arg1);
        arg2 = Math.random();
        res2 = res1 / (arg1 + arg2);
        result = res1 + res2;

    }
    console.log(result);

}

Es más complicado...
*/

//c) Cambia el bucle while original para que se ejecute sin tener que asignar un valor inicial a la variable result.

let result;

do{

  arg1 = Math.random() - 0.5;

  res1 = Math.sqrt(arg1);

  arg2 = Math.random();

  res2 = res1/(arg1 + arg2);

  result = res1 + res2;

  console.log(result);

}while(result >0)
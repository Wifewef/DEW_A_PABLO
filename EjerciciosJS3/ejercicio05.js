/* Usando la función del ejercicio 4, generar un array aleatorio de 20 elementos entre 20 y 100 y luego ordenarlo. */

function generarArrayControlado(numero=20, valorMinimo=20, valorMaximo=100){
    let array=[];
  
    for(let i=0; i<numero; i++){
        array.push(Math.floor(Math.random()*(valorMaximo-valorMinimo))+valorMinimo);
  
    }

    array.sort(function(a, b){return a-b});
    console.log(array);
  }
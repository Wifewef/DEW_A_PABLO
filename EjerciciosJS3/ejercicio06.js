/* Crear una función que mezcle los elementos de un array en orden aleatorio. Probar con el array ordenado creado en el ejercicio anterior */

function generarArrayControlado(numero=20, valorMinimo=20, valorMaximo=100){
    let array=[];
  
    for(let i=0; i<numero; i++){
        array.push(Math.floor(Math.random()*(valorMaximo-valorMinimo))+valorMinimo);
  
    }

    array.sort(function(a, b){return a-b});
    console.log(array);
    array.sort(function(a, b){return 0.5 - Math.random()});
    

  }
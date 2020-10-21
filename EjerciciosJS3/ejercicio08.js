/* Crear una función que acepte un array y devuelva otro array con la raíz cuadrada de cada elemento. 
Probar con un array aleatorio de 20 números entre 60 y 100. */

function generarArrayControlado(numero=10, valorMinimo=100, valorMaximo=200){
    let array=[];
  
    for(let i=0; i<numero; i++){
        array.push(Math.floor(Math.random()*(valorMaximo-valorMinimo))+valorMinimo);
  
    }
    //console.log(array);
    return array;
  }

let numeros = generarArrayControlado(20, 60, 100);


function raicesCuadradasDeArray(numeros){
    let numerosCuadrados=[];
    if(!Array.isArray(numeros)){
        console.log("Introduce un array");
    }else{
        
        for(numero of numeros){
            numerosCuadrados.push(Math.sqrt(numero).toFixed(3));
        }
    }

    console.log("Array inicial: "+numeros);
    console.log("Array raíces: "+numerosCuadrados);

    
}
/* Crear una función que genere un array aleatorio, usando 3 parámetros: 
número de elementos (por defecto 10, valor mínimo del elemento (por defecto 100), valor máximo (por defecto 200). */

function generarArrayControlado(numero=10, valorMinimo=100, valorMaximo=200){
  let array=[];

  for(let i=0; i<numero; i++){
      array.push(Math.floor(Math.random()*(valorMaximo-valorMinimo))+valorMinimo);

  }
  console.log(array);
}
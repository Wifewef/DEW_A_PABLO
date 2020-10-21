/* 6. Para convertir grados Farenheit (`F`) a Celsius (`C`) se usa la siguiente expresión: `C = (F − 32) * 5/9`. 
Implementar una función que realice esta conversión (comprueba que 32ºF son 0ºC y que 75.2ºF son 24ºC). */

function convertirFarenheitACelsius(gradosF){
    let gradosC = (gradosF -32) * (5/9);

    //Utilizo el Number(x).toFixed(2) para formatear el número de forma que sólo muestre 2 decimaless 

    console.log(Number(gradosC).toFixed(2)+"ºC")
}
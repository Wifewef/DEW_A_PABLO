/* 7. En el ejercicio anterior, añadir un argumento opcional booleano de forma que si está a `False` 
(valor por defecto) devuelve sólo el resultado numérico (p.ej: `24`), 
mientras que si se indica `True` le añade la unidad `ºC` (p.ej `24ºC`). */

function convertirFarenheitACelsius(gradosF, signo=false){
    let gradosC = (gradosF -32) * (5/9);

    //Utilizo el Number(x).toFixed(2) para formatear el número de forma que sólo muestre 2 decimales
    
    if(signo){
        console.log(Number(gradosC).toFixed(2)+"ºC");
    }else{
        console.log(Number(gradosC).toFixed(2));
    }
    
}
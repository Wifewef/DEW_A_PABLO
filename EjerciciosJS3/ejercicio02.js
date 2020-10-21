/* Escribir una función que acepte al menos un argumento (el primer argumento debe ser obligatorio, 
mostrar un mensaje de error si no se indica, luego se pueden indicar tantos argumentos como desee el usuario) 
y que devuelva la suma y la media de todos los elementos. 
Comprobar que todos los argumentos sean números e ignorar los que no lo sean, 
mostrando un aviso (por ejemplo: ¡AVISO! El argumento número 3 "Hola" no es un número, lo ignoramos"). */


function calcularSumaYMedia(...args){
    let suma=0, media=0;


    if(args[0] == null){
        console.log("Debes indicar el primer parámetro");
    }else{
        args.forEach(element => {
            if(typeof element != 'number'){
                console.log("El argumento número "+element+" no es un número, lo ignoramos.");
            }else{
                suma+=element;
                media++;
            }
        });
        console.log("Suma: "+suma+"\n");
        console.log("Media: "+suma/media+"\n");

    }

}

/* Escribir una función que busque la cadena "arriba" en un texto. 
La función deberá informar si encuentra o no esta cadena en el texto y, 
si la encuentra, nos deberá mostrar el texto reemplazando "arriba" por "abajo" */



function buscarArriba(texto){
    if(typeof texto != "string"){
        console.log("Introduce un texto");
    }else{

        if(texto.search("arriba")){
            console.log("Texto encontrado\n el texto modificado es: ");
            console.log(texto.replace("arriba", "abajo"));
        }else{
            console.log("No se ha encontrado el texto");
        }


    }

}
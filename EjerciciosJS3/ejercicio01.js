/* Realizar una función que indicando un texto y un carácter 
(ambos obligatorios, comprobar que el segundo parámetro es realmente un único carácter), 
nos diga cuántas veces aparece el carácter en el texto. */

function contarCaracterEnTexto(texto, caracter){
    let contador=0;
    if(caracter.length > 1){
        console.log("Debes introducir un único carácter")
    }else{        
        for(let char of texto){
            if (char==caracter){
                contador++;
            }
        }
    }

    return caracter+" aparece en "+" '"+texto+"' "+" "+contador+" veces.";
}



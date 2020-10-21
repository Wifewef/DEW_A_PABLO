/* Modificar el ejercicio anterior para que si el número ya existía, nos indique cuántas veces había aparecido con anterioridad. */

function generarArrayControlado(numero = 10, valorMinimo = 100, valorMaximo = 200) {
    let array = [];

    for (let i = 0; i < numero; i++) {
        array.push(Math.floor(Math.random() * (valorMaximo - valorMinimo)) + valorMinimo);

    }
    //console.log(array);
    return array;
}

let numeros = generarArrayControlado(50, 10, 20);

function detectarElementosRepetidos(numeros) {
    let numerosExistentes = [];
    if (!Array.isArray(numeros)) {
        console.log("Introduce un array");
    } else {
        for (let i = 0; i < numeros.length; i++) {
            let ocurrencias;
            for(let numero of numerosExistentes){
                if(numero == numeros[i]){
                    let prop = "ocurrencias"+numero;
                    ocurrencias = numerosExistentes[prop];
                }
            }


            let mensaje = "\nEl índice " + i + " contiene el valor " + numeros[i] + ", el cual " + (numerosExistentes.includes(numeros[i]) ? "Ha aparecido en la lista "+ocurrencias+" veces" : "No había aparecido en la lista");
            if (!numerosExistentes.includes(numeros[i])) {
                numerosExistentes.push(numeros[i]);

                //Generamos una propiedad única para cada elemento. De esta forma podemos almacenar las ocurrencias de cada número sin necesidad de usar objetos.
                let prop = "ocurrencias"+numeros[i];
                numerosExistentes[prop] = 1;

            }else{
                for(let numero of numerosExistentes){
                    if(numero == numeros[i]){
                        let prop = "ocurrencias"+numero;
                        numerosExistentes[prop]++;
                    }
                }
            }
            console.log(mensaje);
        }
    }

}
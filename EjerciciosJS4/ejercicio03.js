/* Realiza una función que calcule la media de 5 notas introducidas por el usuario. Utiliza “arguments”. Muestra el resultado por consola */
let mediaArguments= function() {
    if (arguments.length != 5) {
        console.log("Debes introducir 5 números");
    } else {
        let resultado = 0;

            for (let numero of arguments) {
                resultado += numero;
            }

        console.log("Resultado: " + resultado/arguments.length);
    }
}


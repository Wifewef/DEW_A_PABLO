/*  Realiza una función sumatoria utilizando “arguments”. Utiliza un bucle for. El usuario debe introducir 7 números. Resultado muéstralo en consola. */

let sumatorioArguments = function() {
    if (arguments.length != 7) {
        console.log("Debes introducir 7 números");
    } else {
        let resultado = 0;

            for (let numero of arguments) {
                resultado += numero;
            }

        console.log("Resultado: " + resultado);
    }
}
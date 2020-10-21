/* 9. Escribir un programa que proporcione el desglose en el número mínimo de billetes y monedas de una cantidad entera cualquiera de euros dada. 
Recuerda que los billetes y monedas de uso legal disponibles hasta 1 euro son de: 500, 200, 100, 50, 20, 10, 5, 2 y 1 euros. 
Para ello deben solicitar al usuario un número entero (comprobar que lo es) y desglosar la cantidad en el número mínimo de billetes y monedas. */

//Creamos una función para validar que un número introducido sea entero
function validarNumeroNatural(n) {
    if (typeof n !== 'number') {
        return 'Not a number';
    }

    return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
}



function calcularBilleteYResto(cantidad, valor) {

    //Definimos un objeto billete que contiene su valor y el número de ellos
    let billete = {
        valor: valor,
        numero: Math.floor(cantidad / valor)
    }

    resto = Math.floor(cantidad % valor);

    return [billete, resto];
}


function desglosarBilletes(cantidad) {


    //Creamos un array de billetes 
    let desglose = [];

    //Comprobamos que es un número entero
    if (!validarNumeroNatural(cantidad)) {
        console.log("Introduce un número entero");
    } else {

        //Asignamos una variable para llevar un control del dinero que va sobrando
        let resto = 1;

        while (cantidad > 0) {
            let calculos;
            if (cantidad >= 500) {
                calculos = calcularBilleteYResto(cantidad, 500);

            } else if (cantidad >= 200) {
                calculos = calcularBilleteYResto(cantidad, 200);


            } else if (cantidad >= 100) {
                calculos = calcularBilleteYResto(cantidad, 100);

            } else if (cantidad >= 50) {
                calculos = calcularBilleteYResto(cantidad, 50);


            } else if (cantidad >= 20) {
                calculos = calcularBilleteYResto(cantidad, 20);


            } else if (cantidad >= 10) {
                calculos = calcularBilleteYResto(cantidad, 10);

            } else if (cantidad >= 5) {
                calculos = calcularBilleteYResto(cantidad, 5);

            } else if (cantidad >= 2) {
                calculos = calcularBilleteYResto(cantidad, 2);

            } else if (cantidad >= 1) {
                calculos = calcularBilleteYResto(cantidad, 1);

            }
            resto = calculos[1];
            cantidad = resto;
            desglose.push(calculos[0]);
        }
        let resultado = "";
        //Formateamos el resultado de cara a la salida en consola
        desglose.forEach(element => {
            resultado += "Valor: " + element.valor + "€ ~ Cantidad: " + element.numero + "\n";

        });

        console.log(resultado);

    }


}
/* Realiza la actividad 1 utilizando clases. */

class CuentaBancaria{
    constructor(nombre, apellidos, saldo){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.saldo = saldo;
    }

    toString(){
        return "Titular: "+this.nombre+" "+this.apellidos+". Saldo: "+this.saldo+"€";
    }

}


function crearCuentaBancaria(){    
    
    let nombre =window.prompt("Introduce el nombre del usuario");

    let apellidos =window.prompt("Introduce los apellidos del usuario");

    let saldo = window.prompt("Introduce el saldo del usuario");

    let nuevaCuenta = new CuentaBancaria(nombre, apellidos, saldo);

    console.log("Nueva cuenta bancaria creada: "+nuevaCuenta.toString());

}
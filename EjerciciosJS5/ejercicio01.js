/* Crea un script donde se realicen las siguientes acciones:

a) Pedir al usuario un nombre de titular, apellidos de titular y saldo de la cuenta.

b) Crear un nuevo objeto cuentaBancaria que se inicializará con los datos facilitados por el usuario. 

c) Mostrar un mensaje informando de que se ha creado la nueva cuenta bancaria y de los datos asociados a la cuenta bancaria creada. */


function CuentaBancaria(nombre, apellidos, saldo){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.saldo = saldo;
}

CuentaBancaria.prototype.toString = function(){
    return "Titular: "+this.nombre+" "+this.apellidos+". Saldo: "+this.saldo+"€";
}


function crearCuentaBancaria(){    
    
    let nombre =window.prompt("Introduce el nombre del usuario");

    let apellidos =window.prompt("Introduce los apellidos del usuario");

    let saldo = window.prompt("Introduce el saldo del usuario");

    let nuevaCuenta = new CuentaBancaria(nombre, apellidos, saldo);

    console.log("Nueva cuenta bancaria creada: "+nuevaCuenta.toString());

}
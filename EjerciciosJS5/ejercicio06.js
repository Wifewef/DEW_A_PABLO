/* Realiza la actividad 2 utilizando clases y gestión de errores. */

class Persona {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}

class Viajero extends Persona {
    constructor(nombre, apellidos, edad, tieneTarjeta = false) {
        super(nombre, apellidos, edad);
        this.tieneTarjeta = tieneTarjeta;
        this.listaPaises = new Set();
    }

    //Introduce un país en el set de países del viajero
    agregarPais(pais) {
        try {
            //Comprueba el formato del país introducido y que no se encuentre ya en la lista.
            if (typeof pais === 'string' && !this.buscarPais(pais)) {
                this.listaPaises.add(pais)
                alert("País agregado: " + pais + "\n");
            } else {
                throw "Ya existe el país " + pais + ". \n";
            }
        } catch (error) {
            alert(error);
        }

    }

    //Comprueba que el país exista en la lista de países del viajero.
    buscarPais(key) {
        return this.listaPaises.has(key);
    }

    //Borra un país de la lista de países del viajero.
    eliminarPais(pais) {
        try {
            //El propio delete retorna booleano según se haya borrado o no.
            if (this.listaPaises.delete(pais)) {
                alert("País eliminado: " + pais + ".\n");
            } else {
                throw "No se pudo eliminar " + pais + ".\n";
            }
        } catch (error) {
            alert(error);
        }

    }

    //Formatea los datos del viajero.
    mostrarDatos() {
        return "Nombre: " + this.nombre + " " + this.apellidos + ".\n" +
            "Edad: " + this.edad + ".\n" +
            "Listado países: " + this.mostrarPaises() + ".\n" +
            "Tarjeta: " + (this.tieneTarjeta ? "Sí" : "No") + ".\n ---------------------- \n";


    }

    //Recorre la lista de países de cada cliente y formatea el resultado.
    mostrarPaises() {
        let resultado = "\n";
        this.listaPaises.forEach(element => {
            resultado += "- "+element + "\n";
        });

        return resultado;
    }

}


class GestionViajeros {
    constructor() {
        this.listaViajeros = new Map();

    }

    //Formatea un string con el método mostrarDato de cada Viajero en el mapa.
    mostrarDatos() {
        let resultado = "";
        this.listaViajeros.forEach((value, key) => {
            resultado += "ID: " + key + " " + value.mostrarDatos();
        });

        alert(resultado);
    }

    //Introduce un país en el set de países del viajero seleccionado.
    agregarPaisAViajero(id, pais) {
        try {

            //Comprueba que no haya ningún viajero con el id introducido.
            if (!this.buscarViajero(id)) {
                throw "No existe ningún viajero con ese ID";
            } else {
               alert(this.listaViajeros.get(id).agregarPais(pais));
            }

        } catch (error) {
            alert(error);
        }
    }

    //Busca un país en el viajero seleccionado y, si lo encuentra, lo elimina del set de países.
    eliminarPaisAViajero(id, pais) {
        try {
    
            if (!this.buscarViajero(id)) {
                throw "No existe ningún viajero con ese ID";
            } else {
                alert(this.listaViajeros.get(id).eliminarPais(pais));
            }

        } catch (error) {
            alert(error);
        }
    }


    //Retorna un booleano según se encuentre el viajero en la lista de viajeros.
    buscarViajero(key) {
        return this.listaViajeros.has(key);
    }

    //Elimina un viajero si lo encuentra en base a su id.
    eliminarViajero(id) {
        try {

            if (this.listaViajeros.delete(id)) {
                alert("Cliente " + id + " borrado.\n")
            } else {
                throw "No existe ningún viajero con ese ID";
            }

        } catch (error) {
            alert(error);
        }
    }

    //Introduce un nuevo viajero en la base de datos.
    agregarViajero(id, nombre, apellidos, edad, tieneTarjeta) {
        try {

            if (this.buscarViajero(id)) {
                throw "El id " + id + " ya está registrado";
              //Validamos que el formato de los datos introducidos para crear el cliente sean correctos.  
            } else if (!(typeof nombre === "string") || !(typeof apellidos === "string") || !(typeof edad === "number") || isNaN(id) || isNaN(edad)) {
                throw "Los datos introducidos no son correctos";
            } else {
                //Agregamos el viajero si todo fue bien.
                this.listaViajeros.set(id, new Viajero(nombre, apellidos, edad, tieneTarjeta));
                alert( "Viajero " + nombre + " " + apellidos + " agregado. ID: " + id);
            }

        } catch (error) {
            alert(error);
        }

    }

}







//INICIO MENÚ
let salir = false;
let probando = new GestionViajeros();
while (!salir) {

    let opcion = prompt("Elige una opción\n" + "1. Crear viajero\n 2. Eliminar viajero \n 3. Mostrar viajeros \n 4. Agregar país a un viajero \n 5. Eliminar país a un viajero \n 6. Salir \n");
    switch (opcion) {
        case "1":

            let id = prompt("Introduce el ID");
            let nombre = prompt("Introduce el nombre");
            let apellidos = prompt("Introduce los apellidos");
            let edad = prompt("Introduce la edad");
            let tarjeta = confirm("¿Tiene tarjeta de puntos?");
            probando.agregarViajero(Number.parseInt(id), nombre, apellidos, Number.parseInt(edad), tarjeta);

            break;

        case "2":
            let id2 = prompt("Introduce el ID del viajero a eliminar");
            probando.eliminarViajero(Number.parseInt(id2));
            break;
        case "3":
            probando.mostrarDatos();
            break;
        case "4":
            let id3 = prompt("Introduce el ID del viajero");
            let pais = prompt("Introduce el nombre del país");

            probando.agregarPaisAViajero(Number.parseInt(id3), pais);
            break;
        case "5":
            let id4 = prompt("Introduce el ID del viajero");
            let pais2 = prompt("Introduce el nombre del país");
            probando.eliminarPaisAViajero(Number.parseInt(id4), pais2);
            break;
        case "6":
            salir = true;
            alert("Adiós");
            
            break;
        default:
            alert("Opción no válida.\n");
            break;
    }


}
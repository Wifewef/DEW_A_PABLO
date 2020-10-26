/* Crear una expresión regular valide una fecha en formato "XX/XX/XXXX", donde "X" es un dígito. Probarlo con la expresión: "Nací el 05/04/1982 en Donostia.". */

function validarFecha(fecha) {
    fecha.match(/[0-9]{2}[/][0-9]{2}[/][0-9]{4}/) ? console.log("Fecha válida") : console.log("La fecha no es válida");
}
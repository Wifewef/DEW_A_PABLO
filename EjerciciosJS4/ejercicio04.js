/* Realiza la validación de una matrícula de un coche 0000-XXX mediante expresiones regulares. */

let validarMatriculaCoche = function(matricula) {
    matricula.match(/^\d{4}-[A-Za-z]{4}$/) ? console.log("Matrícula válida") : console.log("La matrícula no es válida");
}


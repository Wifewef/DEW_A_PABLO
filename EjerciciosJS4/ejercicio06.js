/* Crear una expresión regular que valide una dirección de email. 
Para simplificar, los valores antes de la @ pueden contener cualquier carácter alfanumérico, y los caracteres . y -, 
mientras que los valores tras la @ pueden contener caracteres alfanuméricos, y el tipo de dominio puede tener una longitud de 2 o 3 caracteres. */

function validarEmail(email) {
    email.match(/^([A-Za-z0-9]||[.]||[-])+@[A-Za-z0-9]+[.][a-z]{2,3}$/) ? console.log("Email válido") : console.log("El email no es válido");
}

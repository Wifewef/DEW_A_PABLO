/* Valida un nombre de usuario en twitter, empieza por @ y puede contener letras mayúsculas y minúsculas, números, guiones y guiones bajos. */

function validarUserTwitter(username) {
    username.match(/^@\w+/) ? console.log("Usuario no válido") : console.log("El usuario es válido");
}
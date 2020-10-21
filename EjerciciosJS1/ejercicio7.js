/* Hacer un juego para que el usuario averigüe la capital de un país previamente definida. 
Tiene tres intentos y debe mostrase en pantalla si ha acertado o no, incluyendo en este caso el número de intentos que le quedan. */

let capital = "Roma";
let intentosRestantes = 3;
let resultado;
while(intentosRestantes > 0){
    resultado = window.prompt("¿Cuál es la capital de Italia? Te quedan "+intentosRestantes+" intentos");
    if(resultado.toLowerCase() == capital.toLowerCase()){
        console.log("Felicidades, has acertado!!");
        intentosRestantes=0;
    }else{
        intentosRestantes--;
        console.log("Fallaste, te quedan "+intentosRestantes+" intentos");
    }

}
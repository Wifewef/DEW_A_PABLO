/* 11. Construye una fecha a partir del texto “02/04/2015”. 
Muestra la fecha con console.log, ¿qué obtienes? 
Prueba ahora con “2015-04-02”.¿Cómo podrías crear una fecha con el texto “April 02, 2015”? */

let texto = "02/04/2015";

console.log(new Date(texto).toUTCString());

//La salida es Wed, 04 Feb 2015 00:00:00 GMT

let texto2="2015-04-02";

console.log(new Date(texto2).toUTCString());

//La salida es Thu, 02 Apr 2015 00:00:00 GMT

let texto3= "April 02, 2015";

//Creando un objeto Date 
let date = new Date(texto3);

console.log(date.toUTCString());

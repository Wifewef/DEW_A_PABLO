/* Analiza el siguiente código y comenta las sentencias. */

//Creamos una lista constante de frutas con un número asignado a cada una
const tropicalBasket = {

    bananas: 3,

    papayas: 0,

    oranges: 7,

    watermelons: 4

};

//Creamos otra lista de valores constantes
const smallBasket = {

    strawberries: 8,

    grapes: 12 };

//Hacemos un método constante que recibe una lista de valores.    
const getFruitsDescription = (basket) => {

    //Almacena el listado de claves en la lista recibida 
    const fruitsListed = Object.keys(basket);

    //Filtra el listado de claves anteriormente recibido. 
    //Designa una variable fruit que toma el valor de cada elemento en el listado. 
    //Mediante una función flecha, comprueba si en la lista original se encuentra cada uno de los valores almacenados en el listado de claves (si existe el elemento es > 0). Los valores que se encuentren se almacenan. 
    const fruitsAvailable = fruitsListed.filter((fruit) => {return basket[fruit] > 0;

    });
    //Formatea la salida de las claves en el listado
    return 'This basket has: ' + fruitsAvailable.join(', ');

};

console.log(getFruitsDescription(tropicalBasket)); console.log(getFruitsDescription(smallBasket)); 
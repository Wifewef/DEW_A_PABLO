/* Analiza el siguiente código y comenta las sentencias. */

//Creamos una constante animal
const animal = {};

//Definimos la propiedad del isHuman del objeto animal, que no es enumerable
Object.defineProperty(animal, 'isHuman', {

    value: false,

    enumerable: false });

//Creamos un objeto dinosaur que hereda de animal
const dinosaur = Object.create(animal);

//Definimos la propiedad isExtinct del objeto dinosaur, que tampoco es enumerable
Object.defineProperty(dinosaur, 'isExtinct', {

    value: true,

    enumerable: false });

//Creamos un objeto tRex que hereda de dinosaur
const tRex = Object.create(dinosaur);

//Definimos la propiedad legs del objeto tRex, que tampoco es enumerable
Object.defineProperty(tRex, 'legs', {

    value: 4,

    enumerable: false });


    

//Creamos una función que obtiene las propiedades de un objeto, incluso a las definidas como enumerable:false
function getAllPropertiesOf(something) {

    //Crea un array para almacenar las propiedades
    let properties = [];

    //Almacena el objeto recibido
    let proto = something;

    //Crea un bucle que itera mientras el objeto tenga un prototipo definido, es decir, que su prototipo directo no sea Object
    while (proto !== Object.prototype) {

        //Obtiene las propiedades intrínsecas de un objeto, es decir, las que son exclusivas de ese objeto y no han sido heredadas ni agregadas. Concatena este resultado y lo almacena en el array.
        properties = properties.concat(Object.getOwnPropertyNames(proto));

        //Obtiene el prototipo directo de sí mismo. Esto junto al bucle while de antes genera una iteración recursiva que almacena las propiedades de un objeto y todos de los que herede, incluso aunque no se pueda acceder a ellos de primeras.
        proto = Object.getPrototypeOf(proto);     }

    return properties; }

//Si muestras el objeto tal cual las propiedades heredadas no se ven
console.log(tRex);

console.log(getAllPropertiesOf(tRex));

 
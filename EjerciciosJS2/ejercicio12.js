/* 12. ¿Cuántos segundos han pasado desde que naciste? ¿y minutos? ¿y horas? ¿y días? 
Implementaruna función que dada una fecha cualquiera en formato “yyyy-mm-dd”, devuelva cuánto tiempo ha pasado desde esa fecha. 
La función aceptará un segundo parámetro para indicar en qué unidad se quiere obtener el resultado: 
‘d’ → días, ‘h’ → horas, ‘m’ → minutos y ‘s’ → segundos. Si no es ninguna de estas unidades, se mostrará un error. */

function calcularTiempoDesdeNacimiento(fecha, unidad = null) {
    if (!fecha.match(/^\d{4}-\d{2}-\d{2}$/)) {
        console.log("Introduce una fecha válida");
    } else {
        let date = new Date(fecha);
        let dateActual = new Date();

        let diferencia = dateActual.getTime() - date.getTime();

        console.log(diferencia);

        switch (unidad) {
            case 'd':
                let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
                console.log("Han pasado " + dias + " días desde la fecha introducida");

                break;
            case 'h':
                let horas = Math.floor(diferencia / (1000 * 60 * 60));
                console.log("Han pasado " + horas + " horas desde la fecha introducida");
                break;
            case 'm':
                let minutos = Math.floor(diferencia / (1000 * 60));
                console.log("Han pasado " + minutos+ " minutos desde la fecha introducida");
                break;
            case 's':
                let segundos = Math.floor(diferencia / (1000));
                console.log("Han pasado " + segundos + " segundos desde la fecha introducida");
                break;

            default:
                console.log("Error. Introduce un formato válido");

        }

    }

}
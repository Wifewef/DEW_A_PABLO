/* Escriba una función para verificar si un valor dado por el usuario es un valor de IP o no. 
El usuario puede incluir IP v4 o IP v6. Debe mostrase un resultado e indicar si es IP v4 o IP v6 */

function verificarIp(texto) {
    let resultado;

    if (texto.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/)) {
        resultado = "La ip introducida es una IPv4";
    } else if (texto.match(/^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$/)) {
        resultado = "La ip introducida es una IPv6";
    } else {
        resultado = "No has introducido una IP";
    }
    return resultado;
}
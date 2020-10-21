/* 13. Implementar una función hdec2hms(x) que transforme una hora en formato decimal a su equivalente en formato hh:mm:ss (en texto). 
Por ejemplo, 8.25 = “8:15:00” y 10.12 = “10:07:12”.Implementar también la función inversa hms2hdec(h,m,s). */

function hdec2hms(x) {
  
    var tiempo = parseFloat(x);
    tiempo *= (60 * 60);
    var horas = Math.floor((tiempo / (60 * 60)));
    tiempo -= (horas * 60 * 60);
    var minutos = Math.floor((tiempo / 60));
    tiempo -= (minutos * 60);
    var segundos = Math.round(tiempo);

    console.log(horas + ":" + minutos + ":" + segundos);
}

function hms2hdec(horas=0, minutos=0, segundos=0){
    let tiempo = (horas + (minutos/60) + (segundos/3600)).toFixed(2);
    console.log(tiempo);

}
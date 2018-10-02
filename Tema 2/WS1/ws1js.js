/* ejer 1 code*/

var dateNow = new Date();

document.write(dateNow.getFullYear() + '<br>');
document.write(dateNow.getUTCMonth() + '<br>');
document.write(dateNow.getUTCDay() + '<br>');
document.write(dateNow.getHours() + '<br>');
document.write(dateNow.getMinutes() + '<br>');
document.write(dateNow.getUTCSeconds() + '<br>');

/* ejer 2 code*/

var fechaHoy = dateNow.getDate();
var fecha85 = fechaHoy + 85;
var fecha187 = fechaHoy - 187;

//document.write(fecha85.setDate(dateNow.getDate() + 730));
//document.write(fecha187 - 1);

/* ejer 3 code*/
function timedText() {
    var x = document.getElementById("lol");
    for (let i = 60; i < 0; i--) {
        setTimeout(function () {
            x.value = i + " seconds"
        });
    }
}

/*ejer 5 code*/

function mueveReloj() {
    var momentoActual = new Date();
    var hora = momentoActual.getHours();
    var minuto = momentoActual.getMinutes();
    var segundo = momentoActual.getSeconds();

    var horaNAIS = hora + " : " + minuto + " : " + segundo;
    var l = document.getElementById("reloj");
    l.value = horaNAIS;
    setTimeout("mueveReloj()", 1000);
}

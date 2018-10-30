/*Code*/

/*1) Diseña una web que hará uso de cookies para guardar el nombre del usuario. En caso de no tener ninguna cookie de
ese sitio, deberá preguntar el nombre del usuario y almacenarlo en una cookie que caducará en 5 minutos. Tras esto
saludará al usuario mediante un mensaje en pantalla. En caso de tener ya creada la cookie deberá leerla y mostrar el
mensaje anterior directamente. Deberá proporcionar también un enlace para borrar la cookie (lo que podríamos llamar 'Cerrar Sesión').*/

function empieza() {
    miCookie= getCookie("username");
    if (miCookie) {
        console.log("Te llamas "+miCookie)
    }
    else
        galleta();

}

function galleta() {
    var lel = prompt("Cual es tu nombre?");
    var d = new Date;

    setCookie("username",lel,1);
}

function delete_cookie(estaGalleta) {
    document.cookie = estaGalleta + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

/*2) Mejora el ejercicio anterior dando al usuario las opciones para que pueda configurar el color de fondo, de párrafo
y el tamaño de la letra.*/

function galleta2() {
    var color = prompt("Que color de fondo quieres?");
    var size = prompt("Que tamaño de la fuente quieres?");


}


/*3) ¿Cómo podemos hacer que la segunda cookie se borre automáticamente al cerrar el navegador? Compruébalo*/


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
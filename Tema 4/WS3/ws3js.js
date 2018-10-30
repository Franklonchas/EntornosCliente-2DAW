/*Code*/

function comprobar() {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    var nick = document.getElementById("nick");
    if (regex.test(nick.value)) {
        nick.style.backgroundColor = "green";
    } else
        nick.style.backgroundColor = "red";
}

function validateEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var correo = document.getElementById("correo");
    if (re.test(correo.value)) {
        correo.style.backgroundColor = "red";
    } else {
        correo.style.backgroundColor = "red";
    }
}
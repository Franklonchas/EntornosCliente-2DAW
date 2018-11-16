/*Ejercicio 2*/

function ejercicio2() {
    var cont;
    cont = document.getElementsByTagName("a");
    var divContent = document.getElementById("contenido");

    if (cont.length != 0) {
        for (let i = 0; i < cont.length; i++) {
            var contenido = cont[i].getAttribute("href");
            document.getElementById('contenido').innerHTML = contenido;
        }
    }
    return cont.length;
}

/*Ejercicio 3*/

function ejercicio3(url, x) {
    setInterval(aux1, x * 1000);
}

function aux1() {
    var tiempo = new Date();
    var segundos = tiempo.getSeconds();

    if (segundos < tiempo.getSeconds()) {
        location.href = "http://www.iesayala.com/moodle/";
    }
    document.getElementById('tiempo').innerHTML = "Estos son los segundos " + segundos;
}


/*Ejercicio 4*/

// PARTE A
class bola {

    constructor(x, y, radio) {
        this.coorx = x;
        this.coory = y;
        this.radio = radio;
    }

    caracteristicas() {
        return ("La bola se encuentra en la posicion " + this.coorx + "," + this.coory + " y tiene radio " + this.radio);
    }
}

// PARTE B

class bolitas {

    constructor() {
        this.bolitasLista = [];
    }

    anadirBola(bola) {
        this.bolitasLista.push(bola);
    }

    buscarBolaPorRadio(radio) {
        let arra = [];
        for (let i = 0; i < this.bolitasLista.length; i++) {
            if (this.bolitasLista[i].radio === radio) {
                arra.push(this.bolitasLista[i]);
                return arra;
            }
        }
        return null;
    }

    mostrarBolas() {
        let num = this.bolitasLista.length;
        let cad = "";
        for (let i = 0; i < this.bolitasLista.length; i++) {
            cad += +", " + this.bolitasLista[i].caracteristicas();
        }
        let resultado = num + cad;
        return resultado
    }
}

/*Ejercicio 5*/

function ejercicio5() {

}


/*Ejercicio 6*/

var whats;
var esta = document.getElementById("escribiendo");

function cancelar(e) {
    e.preventDefault();
    e.target.value = "";
    esta.innerHTML = "";
    clearTimeout(whats);
}

function escribiendo() {
    esta.innerHTML = "Jose esta escribiendo...";
    clearTimeout(whats);
    whats = setTimeout(() => {
        esta.innerHTML = '';
    }, 3000);
}

function enviar(e) {
    if (e.keyCode === 13) {
        cancelar(e);
    } else {
        escribiendo();
    }
}

function iniciarChat() {
    let cajaTexto = document.getElementById("mensaje");
    cajaTexto.addEventListener("keypress", enviar);
}

window.addEventListener("load", iniciarChat);
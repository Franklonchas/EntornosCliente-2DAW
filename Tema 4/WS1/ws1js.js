/*Ejer 1 code*/

function alertas() {
    alert("Me gusta como clickeas!");
}

/*Ejer 2 code*/

function position(event) {
    var x = event.clientX;
    var y = event.clientY;
    var mousePositions = document.getElementById('mousePositions');
    mousePositions.innerHTML = 'X coord: ' + x + ', Y coord: ' + y;
}

/*Ejer 3 code*/

var inicio = new Date;

function tiempo_carga() {
    var fin = new Date;
    var segundos = (fin - inicio) / 1000;
    var salida = "La pagina ha sido cargada en " + segundos + " segundos";
    document.getElementById("tiempoCarga").innerHTML = salida;
}

onload = function () {
    tiempo_carga();
};


/*ejer 9 code*/

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

/*ejer 10 code*/

/*ejer 1 code*/

function maquetarNavigator() {

    var body = document.getElementsByTagName("body")[0];

    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (let i = 0; i < 1; i++) {
        var hilera = document.createElement("tr");
        for (let j in navigator) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode('navigator.' + j + "  :  " + navigator[j]);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        tblBody.appendChild(hilera);
    }
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");

}

/*ejer 2 code*/

function maquetarWindow() {
    body = document.getElementsByTagName("body")[0];

    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (let i = 0; i < 1; i++) {
        var hilera = document.createElement("tr");
        for (let j in window) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode('window.' + j + "  :  " + window[j]);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        tblBody.appendChild(hilera);
    }
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
}
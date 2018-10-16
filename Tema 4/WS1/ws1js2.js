/*Ejer 4 y 5 code*/

function generarTabla() {
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");


    for (var i = 0; i < 100; i++) {
        var hilera = document.createElement("tr");

        for (var j = 0; j < 100; j++) {
            var celda = document.createElement("td");
            celda.onmousemove=eventoColorear;
            var textoCelda = document.createTextNode("");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        tblBody.appendChild(hilera);
    }
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.id = "idTabla";
    var elemento = document.getElementById("td");

    function eventoColorear(e) {
        console.log("coloreando!");
        if (e.ctrlKey) {
            e.target.style.backgroundColor = "blue";
        } else if (e.shiftKey){
            e.target.style.backgroundColor = "red";
        } else if(e.buttons===1){
            e.target.style.backgroundColor = "white";
            /*D key*/
        } else if(e.buttons===4){
            var aborrar= document.getElementById("idTabla");
            aborrar.remove();
            generarTabla();
            console.log("Limpio!");
        }
    }
}
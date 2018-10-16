/* Ejer Puzzle*/

class Puzzle {
    constructor(dimension) {
        this.dimension = dimension;
        this.dibujar(dimension);
    }

    genera_tabla(num) {
        var body = document.getElementsByTagName("body")[0];
        var tabla = document.createElement("table");
        var tblBody = document.createElement("tbody");

        for (var i = 0; i < num; i++) {
            var hilera = document.createElement("tr");

            for (var j = 0; j < num; j++) {
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode('<image src="image" + j + ".jpg"+>');
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
            }
            tblBody.appendChild(hilera);
        }

        tabla.appendChild(tblBody);
        body.appendChild(tabla);
        tabla.setAttribute("border", "2");
    }

    dibujar() {
        if (dimension % 2 == 0) {
            let num = dimension / 2;
            generar_tabla(num);
        } else
            return console.log("La dimension introducida es impar.")
    }

    /*Cuando se pulse una imagen, llamara a esta funcion*/
    moverImagen(img) {
        var imagen = document.getElementById(img);

    }

}


/*Ejer 3 en raya*/

class tresRaya {

}
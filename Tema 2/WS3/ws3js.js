/*ejer 1 code*/

function invierteCadena(cadena) {
    let splitString = cadena.split("");
    let reverseArray = splitString.reverse();
    let revertido = reverseArray.join("");
    return revertido;
}

function inviertePalabras(cadena) {
    let splitString = cadena.split(" ");
    let devolver = "";
    for (let i = 0; i < splitString.length; i++) {
        devolver += invierteCadena(splitString[i] + " ");
    }
    return devolver;
}

function encuentraPalabraMasLarga(cadena) {
    cadenaSplit = cadena.split(" ");
    let aux = "";
    let largo = "";
    for (let i = 0; i < cadenaSplit.length; i++) {
        aux = cadenaSplit[i];
        if (cadenaSplit[i].length > largo) {
            largo = aux;
        }
    }
    return largo;
}

/*ejer 2 code*/


function detectorMayus(cad) {
    var x = ""
    if (cad == cad.toUpperCase()) {
        x = "Son todas mayusculas"
    } else if (cad == cad.toLowerCase()) {
        x = "Son todas minusculas"
    } else {
        x = "Tiene mayusculas y minusculas"
    }
    return x
}

document.write(detectorMayus('SOY TODO MAYUS') + '<br>');
document.write(detectorMayus('SoY uNA MEzclA') + '<br>');
document.write(detectorMayus('soy todo minusculas') + '<br>');


/*ejer 7 code*/

function formateo(cadena) {
    var x = cadena.toLowerCase().split(' ').join('');
    return x;
}

var palabreja = 'ahha';
var y = formateo(invierteCadena(palabreja));
var x = formateo(palabreja);

//document.write(x + '<br>');
//document.write(y + '<br>');

if (x == y) {
    document.write('Es palindromo');
} else {
    document.write('No es palindromo');
}


/*ejer 9 code*/

function crearTabla(palabra) {
    let longitud = palabra.length;
    let palabraInvertida = invierteCadena(palabra);

    let body = document.getElementsByTagName("body")[0];
    let tabla = document.createElement("table");
    let tblBody = document.createElement("tbody");

    for (let i = 0; i < longitud; i++) {
        let hilera = document.createElement("tr");
        for (let j = 0; j < longitud; j++) {
            let celda = document.createElement("td");
            var textoCelda = document.createTextNode(palabra[j]);

            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        tblBody.appendChild(hilera);
    }
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    //tabla.setAttribute("border", "1");
}

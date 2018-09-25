//ejer 4.10 code

function cabecera() {
    for (let i = 1; i < 7; i++) {
        document.write('<h' + i + '>' + "Cabecera h" + i);
    }
}

//ejer 4.11 code

function crearTablas(ncolumnas, alto, ancho) {
    document.write('<table border= "0" cellspacing= "2"  bgcolor= ”black” width = ”200” >');
    document.write('<tr bgcolor= "white" height=' + alto + '>');
    for (let i = 0; i < ncolumnas; i++) {
        document.write('<td width=' + ancho + '</td>\n');
    }
    document.write('</tr>');
    document.write('</table>');
}

//ejer 12 code

function ejer12(numCol, alto, ancho) {
    document.write("<table border='0' cellspacing ='2' bgcolor = 'black' width = '200'>");
    document.write("<tr bgcolor = 'white' height = " + alto + ">");
    for (let i = 1; i <= numCol; i++) {
        if (i % 2) {
            document.write("<td bgcolor = 'black' width= " + ancho + " ></td>");
        } else {
            document.write("<td width= " + ancho + " ></td>");
        }
    }
    document.write("</tr>");
    document.write("</table>");
}

//ejer 13 code

function ejer13(numCol, alto, ancho) {
    let cont = 0;
    document.write("<table border='0' cellspacing ='2' bgcolor = 'black' width = '200'>");
    document.write("<tr bgcolor = 'white' height = " + alto + ">");
    while (cont <= numCol) {
        document.write("<td width= " + ancho + " ></td>");
        cont++;
    }
    document.write("</tr>");
    document.write("</table>");
}

//ejer 14 code

function ejer14(numCol, alto, ancho) {
    var cont = 1;
    document.write("<table border='0' cellspacing ='2' bgcolor = 'black' width = '200'>");
    document.write("<tr bgcolor = 'white' height = " + alto + ">");
    while (cont <= numCol) {
        if (cont % 2) {
            document.write("<td bgcolor = 'black' width= " + ancho + " ></td>");
            cont++;
        } else {
            document.write("<td width= " + ancho + " ></td>");
            cont++;
        }
    }
    document.write("</tr>");
    document.write("</table>");
}

//ejer 15 code

function ejer15(numAdivinar) {
    let num = -1;
    while (num != numAdivinar) {
        num = parseInt(prompt("Introduce un numero"));
        if (num > numAdivinar) {
            alert("El numero a adivinar es menor");
        } else if (num < numAdivinar) {
            alert("El numero a adivinar es mayor");
        } else {
            alert("Has acertado!");
        }
    }
}

// ejer 16 code

function ejer16(numAdivinar) {
    let num = -1;
    do {
        num = parseInt(prompt("Introduce un numero"));
        if (num > numAdivinar) {
            alert("El numero a adivinar es menor");
        } else if (num < numAdivinar) {
            alert("El numero a adivinar es mayor");
        } else {
            alert("Has acertado!");
        }
    } while (num != numAdivinar)
}

// ejer 17 code

function ejer17() {
    for (let y = 1; y <= 10; y++) {
        document.write("<h3>Tabla del " + y + "</h3>");
        for (let x = 1; x <= 10; x++) {
            document.write(y + "x" + x + "=" + y * x + "</br>");
        }
    }
}

// ejer 18 code

function ejer18(numCol, numFil, alto, ancho) {
    document.write("<table border='0' cellspacing ='2' bgcolor = 'black' width = '200'>");
    for (let z = 1; z <= numFil; z++) {
        document.write("<tr bgcolor = 'white' height = " + alto + ">");
        for (let i = 1; i <= numCol; i++) {
            document.write("<td width= " + ancho + " > Hola </td>");
        }
    }
    document.write("</tr>");
    document.write("</table>");
}
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
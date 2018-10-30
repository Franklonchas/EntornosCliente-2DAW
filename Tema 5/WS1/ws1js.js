/*ejer 1 code*/

function detectarEnlaces() {
    var numeroEnlaces = document.getElementsByTagName('a').length;
    var enlacePenultimo = document.getElementsByTagName('a')[length - 2];
    var enlacesGoogle = "";
    var ultimoP = document.getElementsByTagName('p')[length - 1];

}

function boton() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("jejejeje");
    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);
}

function subirFicheros() {
    var ficheros = document.getElementById("filesUp");
    var node = document.createElement("input");
    node.type = 'file';
    ficheros.appendChild(node);
}

var i = 1;

function visor() {
    i++;
    var imagen = document.getElementById("visor");
    var node = document.getElementById("imgxd");
    node.src = "imagen" + i + ".jpg";
    if (i === 4) {
        i = 0;
    }
}
// Ejercicio 1

function ejercicio1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            maquetaRestaurantes(JSON.parse(this.response));
        }
    };

    xhttp.open("GET", "restaurantes.json", true);
    xhttp.send();

    function maquetaRestaurantes(ficheroRestaurantes) {
        var tabla = document.getElementById("restaurantes");
        var restaurantes = ficheroRestaurantes.restaurantes;
        for (let i = 0; i < restaurantes.length; i++) {
            var row = tabla.insertRow(i);
            var cell1 = row.insertCell(restaurantes[i].nombre);
            var cell2 = row.insertCell(restaurantes[i].direccion);
            var cell3 = row.insertCell(restaurantes[i].url);
            var cell4 = row.insertCell(restaurantes[i].imagen);
            cell1.innerHTML = restaurantes[i].nombre;
            cell2.innerHTML = restaurantes[i].direccion;
            cell3.innerHTML = restaurantes[i].url;
            cell4.addEventListener("click", mostrarImagen);
            cell4.innerHTML = restaurantes[i].imagen;
        }
    }

    function mostrarImagen() {
        var imagen = document.getElementById("imagen");
        imagen.innerHTML = "<img src=" + "imagen.jpg" + "/>";
    }
}

//Ejercicio2
var todosRest = [];

function ejercicio2(nombre, direccion, url, id) {
    var tabla = document.getElementById(id);
    var row = tabla.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = nombre;
    cell2.innerHTML = direccion;
    cell3.innerHTML = url;

    todosRest.push([nombre, direccion, url]);
    localStorage.contenedorRestaurantes = JSON.stringify(todosRest);
}

window.onload = function () {
    if (localStorage.contenedorRestaurantes != undefined) {
        console.log('El almacenamiento local contiene datos, recuperando los datos');
        var temp = JSON.parse(localStorage.contenedorRestaurantes);
        for (var i = 0; i < temp.length; i++) {
            ejercicio2(temp[i][0], temp[i][1], temp[i][3], "restaurantes2")
        }
        console.log('Se han recuperado ' + temp.length + ' enlaces');
    }
};

//Ejercicio3

function ejercicio3(num, id) {
    var tabla = document.getElementById(id);
    var x = document.getElementById(id).rows.length;
    if (id > x + 1) {
        console.log("Ese restaurante NO existe");
    } else
        tabla.rows[num].innerHTML = "";
}

//Ejercicio4

function ejercicio4() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            maquetarLibros(this);
        }
    };
    xhttp.open("GET", "libros.xml", true);
    xhttp.send();
}

function maquetarLibros(libros) {
    var conjunto = libros.responseXML;
    var maqueta = document.getElementById("libros");
    var lista = conjunto.getElementsByTagName("Catalog");

    var div = document.createElement("div");

    for (let i = 0; i < lista.length; i++) {
        var autor = lista[i].getElementsByTagName("Author");
        var title = lista[i].getElementsByTagName("Title");
        var genre = lista[i].getElementsByTagName("Genre");
        var price = lista[i].getElementsByTagName("Price");
        var date = lista[i].getElementsByTagName("PublishDate");
        var desc = lista[i].getElementsByTagName("Description");

        div.innerHTML = "Autor= " + autor + '<br>' + ", Titulo= " + title + '<br>' + ", Genero= " + genre + '<br>' + ", Precio = " + price + ", Fecha de salida=" + date + ", Descripcion= " + desc;
        maqueta.appendChild(div);
    }
}

//Ejercicio 5

function ejercicio5(figura, numBolas) {
    if (figura === 1) {
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        for (let i = 0; i < numBolas; i++) {
            var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        }
    }
    if (figura === 2) {
    }
}


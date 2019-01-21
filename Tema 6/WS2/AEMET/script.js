function loadDoc() {
    var select = document.getElementById("municipios");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var todosPueblos = this.responseText.split(/\r?\n/);
            for (var i = 0; i < todosPueblos.length; i++) {
                var respuesta = todosPueblos[i].split(" ", 4);
                var option = document.createElement("option");
                option.value = respuesta[1];
                option.text = respuesta[3];
                select.add(option, select[i]);
            }
            console.log("Municipios cargados");
        }
    };
    xhttp.open("GET", "municipios.txt", true);
    xhttp.send();
}

function consultarTiempo() {
    var localidad = document.getElementById("municipios");
    var id = localidad.options[localidad.selectedIndex].value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);


        }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://www.aemet.es/xml/municipios/localidad_" + id + ".xml", true);
    xhttp.send();
}
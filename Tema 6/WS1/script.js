
var comprobar = setInterval(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "correos.xml", true);
    xhttp.send();
    clearInterval(comprobar);
}, 3000);

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Remitente</th><th>Asunto</th><th>Contenido</th></tr>";
    var x = xmlDoc.getElementsByTagName("correos");
    for (let i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("remitente")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("asunto")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("contenido")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("recibidos").innerHTML = table;
}

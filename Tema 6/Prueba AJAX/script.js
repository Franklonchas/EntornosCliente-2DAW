function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("uno").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "texto.txt", true);
    xhttp.send();
}
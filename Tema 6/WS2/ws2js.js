var username;

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == 1){
                document.getElementById("nick").style.background = "red";
            }
            else if (this.responseText == 0){
                document.getElementById("nick").style.background = "green";
            }
        }
    };
    username = document.getElementById("nick").value;
    xhttp.open("GET", "comprobacion.php?username=" + username, true);
    xhttp.send();
}
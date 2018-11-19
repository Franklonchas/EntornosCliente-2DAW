var cont1 = 0;
var cont2 = 0;


class foto {

    constructor() {
        this.mitag = document.createElement("IMG");
        this.mitag.setAttribute("id", "imagen");
        this.mitag.setAttribute("src", "imagen.jpg");
        this.mitag.addEventListener("click", this.click2);

        this.mitag2 = document.createElement("H3");
        this.mitag2.setAttribute("id", "cont");
        this.cont = 0;

        document.getElementById("album").appendChild(this.mitag);
        document.getElementById("album").appendChild(this.mitag2);
    }

    click2() {
        this.cont++;
        document.getElementById("cont").innerHTML = "has clicado " + this.cont + " veces";
    }
}
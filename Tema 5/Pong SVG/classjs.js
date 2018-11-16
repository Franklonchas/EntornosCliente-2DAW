export class Pelota {

    constructor(radio, x, y) {
        this.r = radio;
        this.bolax = x;
        this.bolay = y;
        this.d = 5;
        this.dx = this.d;
        this.dy = this.d;

        // creacion the tags
        this.miTag = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        //bola
        this.miTag.setAttribute("id", "pelota");
        this.miTag.setAttribute("cx", this.bolax);
        this.miTag.setAttribute("cy", this.bolay);
        this.miTag.setAttribute("r", this.r);
        this.miTag.setAttribute("stroke", "black");
        this.miTag.setAttribute("stroke-width", "3");
        this.miTag.setAttribute("fill", "red");

        //add html
        document.getElementById("campo").appendChild(this.miTag);

    }

    mover(rect1x, rect1y, rect2x, rect2y) {

        if (this.checkposition(rect1x, rect1y, rect2x, rect2y)) {
            console.log("BOING!");
        } else if (this.bolay + this.r >= 600) {
            this.dy = -this.d;
        }

        if (this.bolay - this.r <= 0) {
            this.dy = this.d;
        }

        if (this.bolax + this.r >= 800) {
            this.dx = -this.d
        }

        if (this.bolax - this.r <= 0) {
            this.dx = this.d
        }

        this.bolax += this.dx;
        this.bolay += this.dy;

        this.miTag.setAttribute("cx", this.bolax);
        this.miTag.setAttribute("cy", this.bolay);
    }

    checkposition(rect1x, rect1y, rect2x, rect2y) {

        if (this.bolax === 20 + 30) {

            if (this.bolay >= rect1y && this.bolay <= rect1y + 150) {
                this.dx = this.d;
                return true;
            }
        } else if (this.bolax === 720 + 20) {

            if (this.bolay >= rect2y && this.bolay <= rect2y + 150) {
                this.dx = -this.d;
                return true;
            }
        }
        return false;
    }
}

export class Rectangulo {

    constructor(x, y, id,style) {
        this.rectx = x;
        this.recty = y;
        this.id = id;

        // creacion de tags
        this.mirect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        // rectangulo
        this.mirect.setAttribute("id", this.id);
        this.mirect.setAttribute("x", this.rectx);
        this.mirect.setAttribute("y", this.recty);
        this.mirect.setAttribute("width", "15");
        this.mirect.setAttribute("height", "150");
        this.mirect.setAttribute("style", style);

        // add html
        document.getElementById("campo").appendChild(this.mirect);

    }
}

export class Contador {

    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.cont1 = 0;
        this.cont2 = 0;

    }

    checkGol() {

    }

}
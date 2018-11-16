/*Code*/

var cx = parseInt(pelota.getAttribute("cx"));
var cy = parseInt(pelota.getAttribute("cy"));
var r = parseInt(pelota.getAttribute("r"));
var campo = document.getElementById("campo");
var d = 5;
var dx = d;
var dy = d;

function move() {

    if (cy + r >= 600) {
        dy = -d;
    }

    if (cy - r <= 0) {
        dy = d;
    }

    if (cx + r >= 800) {
        dx = -d
    }
    if (checkposition()) {
        console.log("ey");
    } else if (cx - r <= 0) {
        dx = d
    }

    cx += dx;
    cy += dy;
    pelota.setAttribute("cx", cx);
    pelota.setAttribute("cy", cy);
}

function checkposition() {
    var rectx = 15;
    var recty = 300;

    if (cx == 20 + 30) {
        if (cy >= 300 && cy <= 450) {
            dx = d;
            return true;
        }
    }
    return false;
}


function inicio() {
    setInterval(move, 18);
}



// Imports
import {Pelota} from "./classjs.js";
import {Rectangulo} from "./classjs.js";
import {Contador} from "./classjs.js";

// Creacion de objetos
var pelota = new Pelota(20, 100, 100);
var rect1 = new Rectangulo(30, 300, "rect1","fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)");
var rect2 = new Rectangulo(750, 300, "rect2","fill:rgb(0,255,0);stroke-width:3;stroke:rgb(0,0,0)");
var contador = new Contador("Fran", "sergio");

//code module
setInterval(() => pelota.mover(rect1.rectx, rect1.recty, rect2.rectx, rect2.recty), 22);

window.addEventListener("keypress", (event) => {

    var teclaImp = event.keyCode;
    console.log(teclaImp);

    if (teclaImp === 119 && rect1.recty >0) {
        rect1.recty -= 25;
        document.getElementById("rect1").setAttribute("y", rect1.recty);
    }
    if (teclaImp === 115 && rect1.recty < 450) {
        rect1.recty += 25;
        document.getElementById("rect1").setAttribute("y", rect1.recty);
    }
    if (teclaImp === 105 && rect2.recty >0) {
        rect2.recty -= 25;
        document.getElementById("rect2").setAttribute("y", rect2.recty);
    }
    if (teclaImp === 107 && rect2.recty < 450) {
        rect2.recty += 25;
        document.getElementById("rect2").setAttribute("y", rect2.recty);
    }

});

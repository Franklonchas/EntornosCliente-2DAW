/*ejer 1 code*/
document.write(Math.round(Math.random() * 2));
document.write(Math.round(Math.random() * (200 - 100 + 1)) + 100);

var x = document.getElementById("text1");
var y = document.getElementById("text2");
document.write(Math.round(Math.random() * (x - y + 1)) + y);


/*ejer 5 code*/
var a = parseInt(prompt("variable a"));
var b = parseInt(prompt("variable b"));
var c = parseInt(prompt("variable c"));

var solucion = ((-1 * -b) + (Math.sqrt((Math.pow(b, 2) - (4 * a * c))))) / (2 * a);

document.write(solucion);

/*ejer 7 code*/



/*ejer 8 code*/
var aleatorio = Math.round(Math.random() * 4);

if (aleatorio === 1) {
    var img = document.createElement("img");
    img.src = "image1.png";
    var src = document.getElementById("x");
    src.appendChild(img);
} else if (aleatorio === 2) {
    var img = document.createElement("img");
    img.src = "image2.png";
    var src = document.getElementById("x");
    src.appendChild(img);
} else if (aleatorio === 3) {
    var img = document.createElement("img");
    img.src = "image3.png";
    var src = document.getElementById("x");
    src.appendChild(img);
}
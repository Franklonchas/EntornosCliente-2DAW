//ejer 1 code

var year = 2018;
var byear = 1995;

var current = year - byear;
document.write("Puedes tener entre " + (current) + " y " + (current - 1) + " años. (Depende del mes)" + "<br/>" + "<br/>");


//ejer 2 code

var currentAge = 22;
var max = 99;
var cant = 2;

var cantidadLife = (max - currentAge) * (365 * cant);

document.write("La cantidad que necesitaras es " + cantidadLife + " hasta la edad de " + max + "<br/>" + "<br/>");

//ejer 3 code

var radio = 4;
var pi = 3.14;

document.write("La circunferencia es " + (radio * 2) * pi + "<br/>");
document.write("El area es " + pi * Math.pow(radio, 2) + "<br/>" + "<br/>");

//ejer 4 code

var celsius = 32;
var frah;
frah = (celsius * 1.8) + 32;
celstofrah = (frah - 32) / 1.8;

document.write(celsius + " grados Celsius a Fahrenheit es = " + frah + "<br/>");
document.write(frah + " grados Fahrenheit a Celsius es = " + celstofrah);

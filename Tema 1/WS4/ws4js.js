//ejer 1 code

function greaterNum(num1, num2) {
    if (parseInt(num1) > parseInt(num2)) {
        document.write("El " + num1 + " es mas grande que el " + num2);
    } else if (parseInt(num1) < parseInt(num2)) {
        document.write("El " + num1 + " es mas pequeño que el " + num2);
    } else {
        document.write("Son iguales");
    }
}

//ejer 2 code

function helloWorld(idioma) {
    if (idioma == "es") {
        document.write("Hola mundo!")
    }
    else if (idioma == "de") {
        document.write("Hallo Welt!")
    }
    else if (idioma == "en") {
        document.write("Hello World!")
    }
    else {
        document.write("Los parametros introducidos son erroneos.")
    }
}
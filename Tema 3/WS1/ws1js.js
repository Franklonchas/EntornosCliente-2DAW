/*ejer 2 and 3 code*/

function aleatorio() {
    var numero1 = 0;
    var numero2 = 0;
    var numero3 = 0;
    var numero4 = 0;
    var numero5 = 0;
    var numero6 = 0;
    for (let i = 0; i < 6000; i++) {
        var numero = Math.floor(Math.random() * 7);
        if (numero === 1) {
            numero1++;
        } else if (numero === 2) {
            numero2++;
        } else if (numero === 3) {
            numero3++;
        } else if (numero === 4) {
            numero4++;
        } else if (numero === 5) {
            numero5++;
        } else if (numero === 6) {
            numero6++;
        }
    }
    console.log("Numero 1: " + numero1 + " ,numero2: " + numero2 + " ,numero3: " + numero3 + " ,numero4: " + numero4 + " ,numero5: " + numero5 + " ,numero6: " + numero6);
}

/*ejer 6 code*/

function potencias(base, exponente) {
    var aux = base;
    for (let i = 0; i < exponente - 1; i++) {
        aux = aux * base;
    }
    return aux;
}


/*ejer code 7*/

function factorial(x) {
    if (x === 1) {
        return 1
    } else
        return x * factorial(x - 1)
}

function f() {

}
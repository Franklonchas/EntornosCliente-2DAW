/*ws 2.1 code*/

/*EJERCICIO I,E  No resueltos.*/

function numLargo(array) {
    return Math.max.apply(null, array);
}

function palabraLarga(array) {
    var palabraAux = "";
    var palabraLong = "";
    for (let i = 0; i = array.length; i++) {
        palabraAux = array[i];
        if (palabraAux.length < palabraLong) {
            palabraLong = palabraAux;
        }
    }
    return palabraLong;
}

function numeroPares(array) {
    var par = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            par++
        }
    }
    console.log(par);
}

function numeroImpares(array) {
    var impar = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            impar++
        }
    }
    console.log(impar);
}

function findIs(array) {
    array.sort("es");
}

function entreTres(array) {
    var divisible = 0;
    var arrayNo = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            divisible++;
        } else
            arrayNo.push(array[i]);
    }
}

function fusionarArrays(array1, array2) {
    array1 = array1.concat(array2);
    console.log(array1);
}

function ordenarArray(array) {
    function comparar(a, b) {
        return a - b;
    }

    array.sort(comparar);
}

function borrarPrimerElemento(array) {
    array.shift();
}

function añadirPrimerElemento(array, elemento) {
    array.unshift(elemento);
}

function reemplazarElemento(array, elemento, posicion) {
    array[posicion] = elemento;
}

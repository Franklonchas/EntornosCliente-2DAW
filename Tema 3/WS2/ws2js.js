/*ejer 5 code*/

function paresImpares() {
    var aleatorio;
    var array = [];
    for (let i = 0; i < 100; i++) {
        aleatorio = Math.floor(Math.random() * 1001);
        array.push(aleatorio);
    }
    console.log("Lista desordenada: " + array);

    /*METODO GUAY!*/
    array.sort((a, b) => {
        if (a % 2 == 0) return -1; else return 1
    });
    console.log(array);

    /*METODO TOSCO*/
    var arraySeparada = [];
    for (let j = 0; j < array.length; j++) {
        if (array[j] % 2 == 0) {
            arraySeparada.push(array[j]);
        }
    }
    for (let k = 0; k < array.length; k++) {
        if (array[k] % 2 == 1) {
            arraySeparada.push(array[k]);
        }
    }
    console.log("Array con los pares primero y los impares despues: " + arraySeparada);
}


/*ejer 7 code*/

function listaVacia(array) {
    for (let i = 0; i < 10; i++) {
        array[i] = 0;
    }
    for (let j = 0; j < array.length; j++) {
        array[j] = array[j] + 1;
    }

    console.log(array);
}

/*ejer 8 code*/

function dosDados() {
    var tiradas = [];
    var numeros = [];
    var sumaDados;

    for (let r = 0; r < 11; r++) {
        numeros[r] = 0;
    }

    for (let x = 0; x < 6; x++) {
        tiradas[x] = [0, 0, 0, 0, 0, 0];
    }

    for (let i = 0; i < 36000; i++) {
        let dado1 = Math.floor(Math.random() * 6);
        let dado2 = Math.floor(Math.random() * 6);
        sumaDados = dado1 + dado2;
        (tiradas[dado1][dado2])++;
        numeros[sumaDados]++;
    }
    console.log(tiradas);
    console.log(sumaDados);
}

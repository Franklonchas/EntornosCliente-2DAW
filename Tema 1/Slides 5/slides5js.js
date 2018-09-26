// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

var args = [1, 2, 3, 4, 5];
var args2 = [6, 7, 8, 9, 10];

function argSuma(...args) {
    let cont = 0;
    for (let i = 0; i < args.length; i++) {
        cont += args[i];
    }
    return cont;
}

/*Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and 
returns the sum of only the numbers.*/

function addOnlyNums(args) {
    let cont = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] == "number") {
            cont += args[i];
        } else {
        }
    }
    return cont;
}

/*Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that
combines both (using the spread operator).*/

function combineTwoArrays(array1, array2) {
    let newArray = [array1, array2];
    return newArray;
}

/*Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.*/

function sumEveryOther(args) {
    let cont = 0;
    for (let i = 0; i = args.length; i + 2) {
        cont += args[i];
    }
    return cont;
}

/*Write a function called onlyUniques that can take in any number of arguments, and returns an array of only the unique arguments.*/

function onlyUniques(...args) {
    let arrayUnique = [];
    for (let i = 0; i < args.length; i++) {
        let x = args[i];
        let existe = false;
        for (let j = 0; j < arrayUnique.length; j++) {
            if (x == arrayUnique[j])
                existe = true;
        }
        if (existe == false) {
            arrayUnique.push(args[i]);
        }
    }
    return arrayUnique;
}
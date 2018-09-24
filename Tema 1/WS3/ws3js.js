// ejer 1 code

function tellForune(numchild, partnames, geo, jobtlt) {
    document.write("You will be a " + jobtlt + " in " + geo + " , and married to " + partnames + " with " + numchild + " kids.");
}

//ejer 2 code

function calculateAge(byear, cyear) {
    document.write("Puedes tener entre " + cyear - byear + " o " + (year - cyear) - 1 + "dependiendo del mes.");
}

// Return today's date and time
var currentTime = new Date();
// returns the month (from 0 to 11)
var month = currentTime.getMonth() + 1;
// returns the day of the month (from 1 to 31)
var day = currentTime.getDate();
// returns the year (four digits)
var year = currentTime.getFullYear()
// write output MM/dd/yyyy
document.write(month + "/" + day + "/" + year);


//ejer 3 code

function calculateSupply(age, amount) {
    let cantidad = (age * 365) * amount;
    document.write("You will need" + cantidad + "to last you until the ripe old age of " + age);
}

//ejer 4 code

function celsiusToFahrenheit(celsius) {
    let fah = (celsius * 1.8) + 32;
    document.write(celsius + "ºC is " + fah + " ºF");
}

function fahrenheitToCelsius(fah) {
    let cels = (fah - 32) / 1.8000;
    document.write(fah + "ºF is " + cels + " ºC");
}
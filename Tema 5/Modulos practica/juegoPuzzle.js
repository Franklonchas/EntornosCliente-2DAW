/*Module js*/

import {Model} from "./juego.js";

class View {
    constructor() {
        this.drawTable();
    }

    drawTable() {
        var textTable = '<table id="t" border = "0" cellspacing ="5"> ';
        for (let i = 0; i < 3; i++) {
            textTable += '<tr bgcolor = "#ea5b5b" height="100px">';
            for (let j = 0; j < 3; j++) {
                textTable += '<td id="' + i + j + '"width="100"></td>';
            }
        }
        textTable += '</tr></table>';
        document.getElementById("table").innerHTML = textTable;
    }

    placeNumber(row, column, number) {
        document.getElementById(row.toString() + column.toString()).innerHTML = number;
    }

    createAlert(message) {
        alert(message);
    }

}

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.start();
    }

    start() {
        this.model.generateBoard();
        this.placeBoard();
        this.model.movements = 0;
        document.onkeydown = (e) => this.pressedKey(e, this);
        document.getElementById("notifications").innerHTML = "Movimientos: " + this.model.movements;
    }

    placeBoard() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.view.placeNumber(i, j, this.model.board[i][j]);
            }
        }

    }

    pressedKey(e, that) {

        e = e || window.event;
        if (e.keyCode == '38') { // up arrow
            if (that.model.blankSpace()[0] + 1 < 3) {
                that.model.moveNumber(that.model.blankSpace()[0] + 1, that.model.blankSpace()[1]);
            }
        }
        else if (e.keyCode == '40') { // down arrow
            if (that.model.blankSpace()[0] - 1 > -1) {
                that.model.moveNumber(that.model.blankSpace()[0] - 1, that.model.blankSpace()[1]);
            }
        }
        else if (e.keyCode == '37') { // left arrow
            if (that.model.blankSpace()[1] + 1 < 3) {
                that.model.moveNumber(that.model.blankSpace()[0], that.model.blankSpace()[1] + 1);
            }
        }
        else if (e.keyCode == '39') { // right arrow
            if (that.model.blankSpace()[1] - 1 > -1) {
                that.model.moveNumber(that.model.blankSpace()[0], that.model.blankSpace()[1] - 1);

            }
        }
        that.placeBoard();
        that.model.movements += 1;
        document.getElementById("notifications").innerHTML = "Movimientos: " + that.model.movements;

        if (that.model.checkIfWinner() == true) {
            that.view.createAlert("Has ganado en " + that.model.movements + " movimientos");
            that.view.createAlert("Un nuevo juego va a comenzar");
            that.start();
        }
    }

}

window.onload = function () {
    controller = new Controller();
}
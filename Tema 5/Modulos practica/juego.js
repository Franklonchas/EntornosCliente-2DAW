/*Code js*/


/*
*
*
*
*/


export class Model {
    constructor() {
        this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        this.movements = 0;
        this.generateBoard();
    }

    generateBoard() {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, " "];
        var order = [];
        while (order.length < numbers.length) {
            var newNumber = numbers[Math.floor((Math.random() * numbers.length))];
            if (order.indexOf(newNumber) == -1) {
                order.push(newNumber);
            }
        }

        var n = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.board[i][j] = order[n];
                n += 1;
            }
        }

        console.log(order);
        console.log(this.board);
    }

    blankSpace() {
        var list = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] == " ") {
                    list.push(i);
                    list.push(j);
                }
            }
        }
        return list
    }

    moveNumber(row1, column1) {
        var number = this.board[row1][column1];
        this.board[this.blankSpace()[0]][this.blankSpace()[1]] = number;
        this.board[row1][column1] = " ";

    }

    checkIfWinner() {
        if (this.board[0][0] == 1 && this.board[0][1] == 2 && this.board[0][2] == 3 && this.board[1][0] == 4 &&
            this.board[1][1] == 5 && this.board[1][2] == 6 && this.board[2][0] == 7 && this.board[2][1] == 8 &&
            this.board[2][2] == " ") {
            return true;
        }
        else {
            return false;
        }
    }
}


"use strict";


let guessFunc = function () {
    function res() {
        let random = Math.floor(Math.random() * 100) + 1;
        let userNum = +prompt('Угадай число от 1 до 100');


        if (userNum < random) {
            alert('Загаданное число больше');
            userNum = +prompt('Введите число');


        } else if (userNum > random) {
            alert('Загаданное число меньше');
            userNum = +prompt('Введите число');

        } else if (isNaN(userNum)) {
            alert('Введи число!');
            userNum = +prompt('Введите число');

        } else if (userNum === null) {
            return alert('Игра окончена');

        } else if (userNum === random) {
            return alert('Поздравляю, Вы угадали!!! Игра окончена');

        }

    }

    return res;
}

let guessNumber = guessFunc();

guessNumber();
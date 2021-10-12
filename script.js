"use strict";

function botGame() {
    let random = Math.floor(Math.random() * 100) + 1;


    function validNumber() {
        let num = prompt('Угадай число от 1 до 100.');

        if (num === null) {
            alert('Игра окончена');
            return;
        }


        if (num === random) {
            alert('Поздравляю, Вы угадали!!!');
            if (confirm("Хотите сыграть еще ?")) {
                botGame();
            }
            return;

        } else if (num > random) {
            alert('Вы ввели число больше!');
            validNumber();


        } else if (num < random) {
            alert('Вы ввели число меньше!');
            validNumber();

        } else if (isNaN(num)) {
            alert('Введи число!');
            validNumber();

        }


    }

    validNumber();
}

botGame();

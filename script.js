"use strict";

function botGame() {
    let random = Math.floor(Math.random() * 10) + 1;
    let attempts = 9;


    function validNumber() {
        let num = prompt('Угадай число от 1 до 10');

        if (num === null) {
            alert('Игра окончена');
            return;
        }

        if (attempts == 0) {
            alert('Вы исчерпали все попытки');
            return;
        }

        if (num == random) {
            alert('Поздравляю, Вы угадали!!!');
            if (confirm("Хотите сыграть еще ?")) {
                botGame();
            }
            return;

        } else if (num > random) {
            alert('Вы ввели число больше! Осталось попыток:' + attempts);
            attempts--;
            validNumber();


        } else if (num < random) {
            alert('Вы ввели число меньше!Осталось попыток:' + attempts);
            attempts--;
            validNumber();

        } else if (isNaN(parseFloat(num))) {
            alert('Введи число!');
            attempts--;
            validNumber();

        }
        attempts--;

    }

    validNumber();
}

botGame();
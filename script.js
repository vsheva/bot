"use strict";

<<<<<<< HEAD
let day = document.querySelector("#dmv");

let today = new Date();
let dayOfMonth=today.getDate();
let ourYear = today.getFullYear();
let ourHour =today.getHours();
let ourMinute =today.getMinutes();
let ourSecond = today.getSeconds();
=======
function botGame() {
    let random = Math.floor(Math.random() * 100) + 1;

>>>>>>> 48ac1e3c5b2c0b249795847f428edc78ce6499ec

    function validNumber() {
        let num = prompt('Угадай число от 1 до 100.');

<<<<<<< HEAD
let weekDay = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
let month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]


let updateTime = function() {

  function getWeekDay (today) {
    let index = today.getDay();
    return weekDay[index];
  }

  function getTodayMonth(today) {
    let id = today.getMonth();
    return month[id]
  }

  function hourChange(value) {                                           // почему здесь нe ourHour, вместо value (погуглил решение) ?
    let num = value % 10;                                                 //что проверяется % ?
    if (value > 4 && value < 21) {                                        //cначала num и потом value ?
      return "часов";
    } else if (num > 1 && num <= 4) {
      return "часа";
    } else if (num == 1) {
      return "час";
    } else {
      return "часов";
    }
  }

  console.log(hourChange(ourHour))

  function minuteChange(value1) {                                                 // почему здесь нe ourMinute, вместо value1 ?
    let num = value1 % 10;
    if (value1 > 4 && value1 < 21) {
      return "минут";
    } else if (num > 1 && num <= 4) {
      return "минуты";
    } else if (num == 1) {
      return "минута";
    } else {
      return "минут";
    }
  }

  console.log(minuteChange(ourMinute));

  function secondChange(value2) {
    let num = value2 % 10;
    if (value2 > 4 && value2 < 21) {
      return "секунд";
    } else if (num > 1 && num <= 4) {
      return "секунды";
    } else if (num == 1) {
      return "секунда";
    } else {
      return "секунд";
=======
        const isNumber = function(num) {
            return !isNaN(parseFloat(num)) && isFinite(num);
        }

        if (num == null) {
            alert('Игра окончена');
            return;
        }

        if (num == random) {
            alert('Поздравляю, Вы угадали!!!');
            if (confirm("Хотите сыграть еще ?")) {
                botGame();
            }
            return;

        } else if (num > random) {
            alert('Загаданное число меньше!');
            validNumber();


        } else if (num < random) {
            alert('Загаданное число больше!');
            validNumber();

        } else if (!isNumber(num)) {
            alert('Введи число!');
            validNumber();
        }

>>>>>>> 48ac1e3c5b2c0b249795847f428edc78ce6499ec
    }
  }
  console.log(secondChange(ourSecond));



  let addZero = function(numberHourMin) {                                               //
    if (numberHourMin > 0 && numberHourMin < 10) {
      return "0" + numberHourMin;
    }
    else {
      return numberHourMin
    }
  }










  day.innerHTML = addZero(today.getDate()) + '.' + addZero(today.getMonth()) + '.' + today.getFullYear() + "-" + addZero(today.getHours()) + ':' + addZero(today.getMinutes()) + ':' + addZero(today.getSeconds());

<<<<<<< HEAD
}


let timer = setInterval(updateTime, 1000);












// let options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };
//

//day.textContent = `Сегодня ${today.toLocaleString("ru", options)}, ${hours} часа  ${minutes} минуты  ${seconds}, секунд`;

//alert(today.toLocaleDateString("en-US", options));
//alert(today.toLocaleString());

//return  day.innerHTML = ourHour + ":" + ourMinute + ":" + ourSecond;r

=======
    validNumber();
}

botGame();
>>>>>>> 48ac1e3c5b2c0b249795847f428edc78ce6499ec

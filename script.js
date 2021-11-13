"use strict"


let currentDate = document.querySelector("#dmv1");
let today = new Date();

let weekDay = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]

// function getWeekDay(today) {
//   let index = today.getDay();
//   return weekDay[index];
// }

let greeting;
let timeFormat = () => {
    const hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    const day = weekDay[new Date().getDay() - 1];

    if (hour >= 5 && hour < 12) {
        greeting = "Доброе утро"
    } else if (hour < 18) {
        greeting = "Добрый день"
    } else if (hour < 24) {
        greeting = "Добрый вечер"
    } else if (hour >= 0 && hour < 5) {
        greeting = "Доброй ночи"
    }

    const amPM = hour >= 12 ? 'PM' : 'AM';

    return {
        hour,
        minute,
        second,
        greeting,
        day,
        amPM
    }
};

//let formatTime = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })

function getTimeRemaining() {
    today = new Date()
    let nextDate = new Date("1 January, 2022").getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (nextDate - dateNow) / 1000;
    let days = Math.floor(timeRemaining / (60 * 60 * 24));

    return {
        timeRemaining, days
    }

}

let getZero = function (num) {
    if (num > 0 && num < 10) {
        return "0" + num;
    } else {
        return num
    }
}


let updateTime = function () {
    let time = timeFormat()
    let timer = getTimeRemaining()

    currentDate.innerHTML = ` ${time.greeting} <br>
  Сегодня: ${time.day} <br>
  Текущее время: ${getZero(time.hour)} : ${getZero(time.minute)} : ${getZero(time.second)} ${time.amPM}<br>
  До нового года осталось ${timer.days} дней
  `
}


updateTime();














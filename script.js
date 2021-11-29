"use strict"

let updateTime = function () {

    let currentDate = document.querySelector("#dmv");
    let currentDateShort = document.querySelector("#mpv");
    let today = new Date();

    let weekDay = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
    let month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]


    console.dir(new Date().toLocaleString())
    let timeFormat = () => {
        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();
        let day = weekDay[today.getDay()];
        let date = today.getDate();
        let monthNow = month[today.getMonth()];
        let year = today.getFullYear();


        return {
            hour,
            minute,
            second,
            day,
            date,
            monthNow,
            year
        }
    };

    let getZero = function (num) {
        if (num > 0 && num < 10) {
            return "0" + num;
        } else {
            return num
        }
    }


    function hourChange(value) {
        let num = value % 10;
        if (value > 4 && value < 21) {
            return "часов";
        } else if (num > 1 && num <= 4) {
            return "часа";
        } else if (num === 1) {
            return "час";
        } else {
            return "часов";
        }
    }

    function minuteChange(value1) {
        let num = value1 % 10;
        if (value1 > 4 && value1 < 21) {
            return "минут";
        } else if (num > 1 && num <= 4) {
            return "минуты";
        } else if (num === 1) {
            return "минута";
        } else {
            return "минут";
        }
    }

    function secondChange(value2) {
        let num = value2 % 10;
        if (value2 > 4 && value2 < 21) {
            return "секунд";
        } else if (num > 1 && num <= 4) {
            return "секунды";
        } else if (num === 1) {
            return "секунда";
        } else {
            return "секунд";

        }
    }

    let time = timeFormat()

    currentDate.innerHTML = `Сегодня ${time.day}, ${time.date} ${time.monthNow} ${time.year},
${getZero(time.hour)} ${hourChange(time.hour)} 
${getZero(time.minute)} ${minuteChange(time.minute)}   
${getZero(time.second)} ${secondChange(time.second)}  
  `
    currentDateShort.innerHTML = `${time.date}.${month.indexOf(time.monthNow) + 1}.${time.year} - ${getZero(time.hour)} : ${getZero(time.minute)} : ${getZero(time.second)}

  `
}

setInterval(updateTime, 1000)



"use strict";

let day = document.querySelector("#dmv");
let today = new Date();

let weekDay = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
let month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]


function getWeekDay (today) {
  let index = today.getDay();
  return weekDay[index];
}


function getTodayMonth(today) {
  let id = today.getMonth();
  return month[id]
}


let dayOfMonth=today.getDate();
let ourYear = today.getFullYear();
let ourHour =today.getHours();
let ourMinute =today.getMinutes();
let ourSecond = today.getSeconds();


//alert(today.toLocaleString());

function hourChange(value) {                                           // почему здесь нe ourHour
  let num = value % 10;
  if (value > 4 && value < 21) {                                        //cначала num и потом value что проверяется %
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

function minuteChange(value1) {
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

function secondChange(value3) {                                                  //
  let num = value3 % 10;
  if (value3 > 4 && value3 < 21) {
    return "секунд";
  } else if (num > 1 && num <= 4) {
    return "секунды";
  } else if (num == 1) {
    return "секунда";
  } else {
    return "секунд";
  }
}
console.log(secondChange(ourSecond));



function addZero(numberHourMin) {                                               // как применить ноль
  if (nuberHourMin < 10) {
    return 0 + String(numberHourMin);
  }
  else {
    return numberHourMin
  }
}





let timer = setInterval(() => {                                                  // не работает обновление

  return  day.innerHTML = ourHour + ":" + ourMinute + ":" + ourSecond;
}, 1000);




// let options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };
//

// let hours = today.getHours();
// let minutes = today.getMinutes();
// let seconds = today.getSeconds();

//day.textContent = `Сегодня ${today.toLocaleString("ru", options)}, ${hours} часа  ${minutes} минуты  ${seconds}, секунд`;




//alert(today.toLocaleDateString("en-US", options));




//console.log(wordChange(hours, ["час", "часа", "часов"]));
// console.log(wordChange(minutes, ["минута", "минуты", "минут"]));
// console.log(wordChange(seconds, ["секунда", "секунды", "секунд"]));



//day.textContent = ` ${hours} часа  ${minutes} минуты  ${seconds} секунд`;
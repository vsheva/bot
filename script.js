"use strict";

let day = document.querySelector("#dmv");

let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
let today = new Date();

day.textContent = `Сегодня ${today.toLocaleString("ru", options)}, ${today.getHours()} часа  ${today.getMinutes()} минуты  ${today.getSeconds()} секунд`;

//alert(today.toLocaleString());

// function wordDecline(value, words) {
//   let num = value % 10;
//   if (value > 4 && value < 21) {
//     return words[2];
//   } else if (num > 1 && num <= 4) {
//     return words[1];
//   } else if (num == 1) {
//     return words[0];
//   } else {
//     return words[2];
//   }
// }

console.log(wordDecline(5, ["час", "часа", "часов"]));
console.log(wordDecline(3, ["минута", "минуты", "минут"]));
console.log(wordDecline(32, ["секунда", "секунды", "секунд"]));











//alert(today.toLocaleDateString("en-US", options));

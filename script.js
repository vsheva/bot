"use strict"

const img = document.querySelector('img');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
let count = 0;
let animation;
let active = false;


const carMotion = () => {
    animation = requestAnimationFrame(carMotion);
    count++;
    console.log(count)
    if (count < 120) {
        img.style.left = count * 8 + 'px';
    } else {
        cancelAnimationFrame(animation);
    }
}


start.addEventListener('click', () => {
    if (active != true) {
        animation = requestAnimationFrame(carMotion);
        active = true;
    } else {
        cancelAnimationFrame(animation);
        active = false;
    }
})


reset.addEventListener('click', () => {
    cancelAnimationFrame(animation);
    img.style.left = 0 + "px"
    count = 0;
    active = false;
})




















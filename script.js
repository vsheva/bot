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
    if (count < 97) {
        img.style.left = count * 10 + 'px';
    } else {
        cancelAnimationFrame(animation);
    }
}


start.addEventListener('click', () => {
    if (active === false) {
        animation = requestAnimationFrame(carMotion);
        active = true;
    } else {
        active = false;
        cancelAnimationFrame(animation);
    }
})


reset.addEventListener('click', () => {
    count = 0;
    active = false;
    cancelAnimationFrame(animation);
    img.removeAttribute('style');
})



















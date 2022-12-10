const slider = document.querySelector(".example__slider-content");
const imageBefore = document.querySelector(".example__slider--before");
const imageAfter = document.querySelector(".example__slider--after");
const grip = document.querySelector('.example__slider-grip');
const buttonBefore = document.querySelector('.example__slider-btn--before');
const buttonAfter = document.querySelector('.example__slider-btn--after');


buttonBefore.addEventListener('click', () =>{
    imageBefore.style.width = "100%"
    imageAfter.style.width = '0'
    grip.style.left = "0"
})

buttonAfter.addEventListener('click', () =>{
    imageAfter.style.width = '100%'
    imageBefore.style.width = "0"
    grip.style.left = "100%"
    // grip.style.left = "52%"
})
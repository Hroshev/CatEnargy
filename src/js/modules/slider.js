const slider = document.querySelector(".example__slider-content");
const scale = document.querySelector(".example__slider-scale");
const imageBefore = document.querySelector(".example__slider--before");
const imageAfter = document.querySelector(".example__slider--after");
const grip = document.querySelector('.example__slider-grip');
const buttonBefore = document.querySelector('.example__slider-btn--before');
const buttonAfter = document.querySelector('.example__slider-btn--after');

let isActive = false;

const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x, slider.offsetWidth));
    let scaleWidth = Math.max(0, Math.min(x, scale.offsetWidth));
    imageAfter.style.width = `calc(${scaleWidth}px + 220px)`;
    grip.style.left = `${scaleWidth}px`;
}

// imageAfter.style.width = `calc(${shift}px + 220px)`;

const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
}

document.body.addEventListener('mouseup', () => {
    isActive = false;
});

document.body.addEventListener('mousedown', () => {
    isActive = true;
});

document.body.addEventListener('mouseleave', () => {
    isActive = false;
});

document.body.addEventListener('mousemove', (e) => {
    if(!isActive) {
        return;
    }
    let x = e.pageX;
    x -= scale.getBoundingClientRect().left;
    beforeAfterSlider(x);
    pauseEvents(e);
})



window.addEventListener("resize", () => {
    const windowInnerWidth = window.outerWidth;
    if(windowInnerWidth <= 576) {
        clickButtonLeft()
    }
});

buttonBefore.addEventListener('click', () =>{
    clickButtonLeft()
})

buttonAfter.addEventListener('click', () =>{
    clickButtonRight()
})

function clickButtonLeft(){
    imageBefore.style.width = "100%"
    imageAfter.style.width = '0'
    grip.style.left = "0"
}

function clickButtonRight(){
    const windowInnerWidth = window.outerWidth;
    imageAfter.style.width = '100%'
    imageBefore.style.width = "0"
    windowInnerWidth <= 576 ? grip.style.left = "50%" : grip.style.left = "100%"
}
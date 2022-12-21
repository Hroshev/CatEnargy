const slider = document.querySelector(".slider");
const sliderContent = document.querySelector(".slider__content");
const scale = document.querySelector(".slider__scale");
const imageBefore = document.querySelector(".slider__image--before");
const imageAfter = document.querySelector(".slider__image--after");
const grip = document.querySelector('.slider__grip');
const buttonBefore = document.querySelector('.slider__btn--before');
const buttonAfter = document.querySelector('.slider__btn--after');

let isActive = false;

const beforeAfterSlider = (x) => {
    let gripShift = Math.max(0, Math.min(x, scale.offsetWidth));
    let imageShift = Math.floor(Math.max(0, Math.min(x, ((gripShift * 100) / sliderContent.offsetWidth) + 35)));

    imageAfter.style.width = `${imageShift}%`;
    grip.style.left = `${gripShift}px`;
}

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

if(slider){
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
}

function clickButtonLeft(){
    imageBefore.style.width = "100%"
    imageAfter.style.width = '0'
    grip.style.left = "0"
    grip.style.transition = "left .2s linear"
}

function clickButtonRight(){
    const windowInnerWidth = window.outerWidth;
    imageAfter.style.width = '100%'
    imageBefore.style.width = "0"
    windowInnerWidth <= 576 ? grip.style.left = "50%" : grip.style.left = "100%"
    grip.style.transition = "left .2s linear"
}
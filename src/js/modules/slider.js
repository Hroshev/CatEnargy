const slider = document.querySelector(".example__slider-content");
const imageBefore = document.querySelector(".example__slider--before");
const imageAfter = document.querySelector(".example__slider--after");
const grip = document.querySelector('.example__slider-grip');
const buttonBefore = document.querySelector('.example__slider-btn--before');
const buttonAfter = document.querySelector('.example__slider-btn--after');



const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x, 100));
    imageBefore.style.width = `${shift}%`;
    grip.style.left = `${shift - 8}%`;
}

document.body.addEventListener('mousemove', (e) => {
    if(!isActive) {
        return;
    }
    let x = e.pageX;
    x -= slider.getBoundingClientRect().left;
    beforeAfterSlider(x);
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
    windowInnerWidth <= 576 ? grip.style.left = "52%" : grip.style.left = "92%"
}


  
const currSlide = document.querySelectorAll('.slide');
const navButton = document.querySelectorAll('.nav-buttons');
const slideContainer = document.getElementsByClassName('slide-container')[0];
let currIndex = 0;


document.addEventListener('DOMContentLoaded', () => {
    cycleSlide(0);  
});

function cycleSlide(index) {
    currSlide.forEach((slide, i) => {
        if (i === index){
            if(i % 2 === 0){
                slideContainer.classList.add('slide-background2');
            } else {
                slideContainer.classList.remove('slide-background2');
            }
            slide.classList.add('visible');
        } else {

            slide.classList.remove('visible');
        }
    });
}

navButton.forEach((button, i) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        cycleSlide(i); 
    });
});
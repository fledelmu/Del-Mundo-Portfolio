const currSlide = document.querySelectorAll('.slide');
const navButton = document.querySelectorAll('.nav-buttons');
const projectPreview = document.querySelectorAll('.project-preview');
const slideContainer = document.getElementsByClassName('slide-container')[0];
let currIndex = 0;


document.addEventListener('DOMContentLoaded', () => {
    cycleSlide(0);  
});

function cycleSlide(index) {
    currIndex = index;
    currSlide.forEach((slide, i) => {
        if (i === index){
            if(i % 2 === 0){
                slideContainer.classList.add('alt-slide');
            } else {
                slideContainer.classList.remove('alt-slide');
            }
            slide.classList.add('visible');
        } else {

            slide.classList.remove('visible');
        }
    });

    navButton.forEach((button, i) => {
        if (i === currIndex) {
            button.classList.add('mouse-hover', 'enlarge-font');
        } else {
            button.classList.remove('mouse-hover', 'enlarge-font'); 
        }
    });
}

navButton.forEach((button, i) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        cycleSlide(i); 
    });

    button.addEventListener('mouseover', function(){
        button.classList.add('mouse-hover', 'enlarge-font');
    })
    
    button.addEventListener('mouseout', function(){
        if(i !== currIndex){
            button.classList.remove('mouse-hover', 'enlarge-font');
        }
    })
});

function showProject(id){
    document.querySelectorAll('.project-preview').forEach(preview => {
        preview.classList.add('hide');
        const details = preview.querySelector('.project-details');
        if (details) {
            details.classList.remove('show');
        }
    });
    
    const currProject = document.getElementById(`project${id}`);
    currProject.classList.remove('hide');

    
    const currButton = document.getElementById(`button${id}`);
    currButton.textContent = "Go Back";

    document.getElementById(`project${id}`).classList.add('show');
    const details = currProject.querySelector('.project-details');
    if (details) {
        details.classList.add('show');
    }

    currButton.setAttribute('onclick', `goBack(${id})`);
}

function goBack(id){
    document.querySelectorAll('.project-preview').forEach(preview => {
        preview.classList.remove('hide');

        const details = preview.querySelector('.project-details');
        if (details) {
            details.classList.remove('show');
        }
    })

    
    const currButton = document.getElementById(`button${id}`);
    currButton.textContent = "Check It Out!";
    currButton.setAttribute('onclick', `showProject(${id})`);
}
const hamburgerMenu = document.querySelector('#hamburger');
const menuDrawer = document.querySelector('#menu-drawer');
const closeIcon = document.querySelector('#close-icon');
const aboutButton = document.querySelectorAll('.cross-container');
const side1 = document.querySelectorAll('.side-1');
const side2 = document.querySelectorAll('.side-2');
const directorContainer = document.querySelector('#director-container');
const closeAbout = document.querySelectorAll('.close-about');
const required = document.querySelectorAll('.required');
const overlayTarget = document.querySelector('#overlay-target');
const home2 = document.querySelector('#home-2');

//contact page variables
const form = document.querySelector('#contact-form');
const contactName = document.querySelector('#name');

const email = document.querySelector('#email');
const company = document.querySelector('#company');
const title = document.querySelector('#title');
const message = document.querySelector('#message');
const submit = document.querySelector('#submit');

hamburgerMenu.addEventListener('click', () => {
    menuDrawer.classList.remove('hide');
    overlayTarget.classList.add('body-overlay');
})

closeIcon.addEventListener('click', () => {
    menuDrawer.classList.add('hide');
    overlayTarget.classList.remove('body-overlay');
})


for (let i = 0; i < aboutButton.length; i++) {
    aboutButton[i].addEventListener('click', () => {
        console.log(`you just clicked the ${i} about button`);
        side1[i].classList.add('hide');
        side2[i].classList.remove('hide');
    })
}

const inputs = [ contactName, email, company, title, message ]

for (let i = 0; i < closeAbout.length; i++) {
    closeAbout[i].addEventListener('click', () => {
        console.log('close');
        side1[i].classList.remove('hide');
        side2[i].classList.add('hide');
    })
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            required[i].classList.remove('hide');
        } else {
            required[i].classList.add('hide');
        }
    }
})
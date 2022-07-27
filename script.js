const hamburgerMenu = document.querySelector('#hamburger');
const menuDrawer = document.querySelector('#menu-drawer');
const closeIcon = document.querySelector('#close-icon');
const aboutButton = document.querySelectorAll('.cross-container');
const side1 = document.querySelectorAll('.side-1');
const side2 = document.querySelectorAll('.side-2');
const directorContainer = document.querySelector('#director-container');
const closeAbout = document.querySelectorAll('.close-about');

hamburgerMenu.addEventListener('click', (e) => {
    menuDrawer.classList.remove('hide');
})

closeIcon.addEventListener('click', () => {
    menuDrawer.classList.add('hide');
})


for (let i = 0; i < aboutButton.length; i++) {
    aboutButton[i].addEventListener('click', () => {
        console.log(`you just clicked the ${i} about button`);
        side1[i].classList.add('hide');
        side2[i].classList.remove('hide');
    })
}

for (let i = 0; i < closeAbout.length; i++) {
    closeAbout[i].addEventListener('click', () => {
        console.log('close');
        side1[i].classList.remove('hide');
        side2[i].classList.add('hide');
    })
}

// directorContainer.addEventListener('click', (e) => {
//     console.log(e)
//     // if (e.target.tagName === 'IMG') {
//     //     console.log('clicked!')
//     // }
// })
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {

  if(header.classList.contains('open')){
    /*  Close Hamburger Menu */
    body.classList.remove('no-scroll');
    header.classList.remove('open');
    fadeElems.forEach((element)=> {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    // overlay.classList.remove('fade-in');
    // overlay.classList.add('fade-out');
  } else {
    /*  Open Hamburger Menu */
    body.classList.add('no-scroll');
    header.classList.add('open');
    fadeElems.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    })
    // overlay.classList.remove('fade-out');
    // overlay.classList.add('fade-in');
  }
})
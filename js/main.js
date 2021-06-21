// Selectors

const body = document.querySelector('body');

const hamburguerIcon = document.querySelector('.menu-btn-open');
const closeIcon = document.querySelector('.menu-btn-close');
const menuMobile = document.querySelector('.menu-list');
const menuMobileLi = menuMobile.querySelectorAll('li');

// Function that allows opening and closing the menu

function openMenu() {
  hamburguerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  menuMobile.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
}

// Events

hamburguerIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', openMenu);
menuMobileLi.forEach((Element) => Element.addEventListener('click', openMenu));

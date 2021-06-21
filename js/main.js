const hamburguerIcon = document.querySelector('.menu-btn-open');
const closeIcon = document.querySelector('.menu-btn-close');
const menuMobile = document.querySelector('.menu-list-mobile');


function openMenu() {
	hamburguerIcon.classList.toggle('hidden');
	closeIcon.classList.toggle('hidden');
	menuMobile.classList.toggle('hidden');
}

hamburguerIcon.addEventListener('click',openMenu);
closeIcon.addEventListener('click',openMenu);

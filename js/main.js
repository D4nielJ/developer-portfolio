const hamburguerIcon = document.querySelector('.menu-btn-open');
const closeIcon = document.querySelector('.menu-btn-close');


function openMenu() {
	hamburguerIcon.classList.toggle('hidden');
	closeIcon.classList.toggle('hidden');
}

hamburguerIcon.addEventListener('click',openMenu);
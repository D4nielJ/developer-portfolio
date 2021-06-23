const form = document.querySelector('.contact-me-form');
const email = document.querySelector('#user_email');
const error = document.querySelector('.form__error-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    error.classList.add('form__error-msg--active');
})
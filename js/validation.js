const form = document.querySelector('.contact-me-form');
const email = document.querySelector('#user_email');
const error = document.querySelector('.form__error-msg');

function isItUppercase(value) {
  if (value === value.toLowerCase()) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (e) => {
  if (isItUppercase(email.value)) {
    error.classList.remove('form__error-msg--active');
  } else {
    e.preventDefault();
    error.classList.add('form__error-msg--active');
  }
});

const form = document.querySelector('.contact-me-form');
const email = document.querySelector('#user_email');
const error = document.querySelector('.form__error-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    error.classList.remove('form__error-msg--active')
    error.classList.add('form__error-msg--active');
})

// value1 = "mayus@gmail.com" // Should return match
// value2 = "minus" // Should return null
// value3 = "MiXeD" // Should return match

// function isItUppercase(value) {
//   if (value.match(/^[a-z@.]*$/)) {
//     return "Okay";
//   } else {
//     return "Not okay"
//   }
// }

// console.log(isItUppercase(value1));
// console.log(isItUppercase(value2));
// console.log(isItUppercase(value3));
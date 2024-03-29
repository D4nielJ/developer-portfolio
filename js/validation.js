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

function storageAvailable(type) {
  let storage;
  try {
    const x = '__storage_test__';
    storage = window[type];
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
      e.code === 22
          // Firefox
          || e.code === 1014
          // test name field too, because code might not be present
          // everything except Firefox
          || e.name === 'QuotaExceededError'
          // Firefox
          || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
          // acknowledge QuotaExceededError only if there's something already stored
          && (storage && storage.length !== 0);
  }
}

const checkLocalStorage = () => {
  if (storageAvailable('localStorage')) {
    // Save input values to local storage
    const setFormValues = () => {
      const formData = {
        name: form.user_name.value,
        email: form.user_email.value,
        message: form.user_message.value,
      };

      localStorage.setItem('formData', JSON.stringify(formData));
    };

    form.user_name.addEventListener('change', setFormValues);
    form.user_email.addEventListener('change', setFormValues);
    form.user_message.addEventListener('change', setFormValues);

    // Retrieve Values from Local Storage
    let name = '';
    let email = '';
    let message = '';

    if (JSON.parse(localStorage.getItem('formData')) === null) {
      name = '';
      email = '';
      message = '';
    } else {
      ({ name, email, message } = JSON.parse(localStorage.getItem('formData')));
    }

    if (name !== '' || email !== '' || message !== '') {
      form.user_name.value = name;
      form.user_email.value = email;
      form.user_message.value = message;
    }
  }
};

window.onload = checkLocalStorage;

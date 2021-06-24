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
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}


if (storageAvailable('localStorage')) {

  const setFormValues = () => {
    let formData = {
      name: form.contact_name.value,
      email: form.contact_email.value,
      message: form.contact_message.value,
    }
  
    localStorage.setItem('formData', JSON.stringify(formData));
  }

  form.contact_name.addEventListener('change', setFormValues);
  form.contact_email.addEventListener('change', setFormValues);
  form.contact_message.addEventListener('change', setFormValues);


  let {name, email, message} = JSON.parse(localStorage.getItem('formData'));

  if (name !== '' || email !== '' || message !== '') {
    form.contact_name.value = name;
    form.contact_email.value = email;
    form.contact_message.value = message;
  }

const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
  e.preventDefault();
  const emailValidate = email.value;

  // check if email is valid 
  if (email.value = '') {
    form.innerHTML = 'Whoops! It looks like you forgot to add your email';
  } else if (!validateEmail(emailValidate)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
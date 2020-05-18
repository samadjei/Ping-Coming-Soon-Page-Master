const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
  e.preventDefault();
  // check for email value 
  const email = form['email'];
  const emailValidate = email.value;
  const small = form.querySelector('small');

  // check if email is valid 
  if (!emailValidate) {
    // say it's empty 
    email.classList.add('error');
    small.innerText = 'Whoops! It looks like you forgot to add your email';
    small.style.visibility = 'visible';
  }else if (!validateEmail(emailValidate)) {
    form.classList.add('error');
    small.innerText = 'Please provide a valid email address';
    small.style.visibility = 'visible';
  } else {
    form.classList.remove('error');
    small.innerText = '';
    small.style.visibility = hidden;
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
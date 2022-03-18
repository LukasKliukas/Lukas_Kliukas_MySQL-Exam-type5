const BASE_URL = 'http://localhost:3000';
const formEl = document.forms.register;
const errorsContainerEl = document.querySelector('.errors');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const password = formEl.elements.password.value;
  const repPassword = formEl.elements.repeat_password.value;
  if (password !== repPassword) {
    errorsContainerEl.textContent = 'Passwords do not match';
    return;
  }
  const registerUserData = {
    email: formEl.elements.email.value,
    password: formEl.elements.password.value,
    full_name: formEl.elements.fullName.value,
  };
  registerUser(registerUserData);
});

async function registerUser(registerUserData) {
  const resp = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerUserData),
  });
  const dataInJs = await resp.json();
  if (dataInJs.success === false) {
    handleErrors(dataInJs.error);
  }
  if (dataInJs.success === true) {
    window.location.replace('login.html');
  }
}

function handleErrors(erorrArray) {
  errorsContainerEl.innerHTML = '';
  erorrArray.forEach((err) => {
    errorsContainerEl.innerHTML += `<p>${err.message}</p>`;
  });
}

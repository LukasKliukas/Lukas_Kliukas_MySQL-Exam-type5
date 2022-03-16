//1. uzdedam formai eventa
//2. surenkam input duomenis
//3. kuriam registerUser fn
//4. jei yra klaidu tai handleErrors
//5. jei nera klaidu tai redirect i login.html

const BASE_URL = 'http://localhost:3000';
const formEl = document.forms.register;

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const registerUserData = {
    username: formEl.elements.username.value,
    password: formEl.children.password.value,
  };
  console.log(registerUserData);
  //validation
  //Todo:
  registerUser(registerUserData);
});

async function registerUser(registerUserData) {
  console.log('we are trying to register with ===', registerUserData);
  //siunciam post request ir pridedam formoje ivestus duomenis
  const resp = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerUserData),
  });
  //pasiverciam gauta atsakyma i js objekta ar masyva ar stringa
  const respInJs = await resp.json();
  console.log('respInJs ===', respInJs);
  if (respInJs.success === false) {
    handleErrors(respInJs.errors);
  }
  if (respInJs.success === true) {
    //nunaviguoti i profile puslapi
    window.location.replace(`index.html?username=${registerUserData.username}`);
  }
}

function handleErrors(erorrArray) {
  errorsContainerEl.innerHTML = '';
  console.log('erorrArray ===', erorrArray);
  erorrArray.forEach((err) => {
    errorsContainerEl.innerHTML += `<p>${err.message}</p>`;
  });
}

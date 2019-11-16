const repaintContainer = container => {
  container.innerHTML = "";
};

const displayUserName = user => {
  helloUser.innerText = `Hello, ${user}`;
};

const checkIfLoggedIn = () => {
  const token = sessionStorage.getItem("accessToken");
  return token !== null && token !== "undefined";
};

//disable add movie buttons and general disable function
const disableButtons = button => {
  button.setAttribute("disabled", true);
};
const enableButtons = button => {
  button.removeAttribute("disabled");
};

// Reusable function that shows the element on our page
let displayElement = element => {
  element.style.display = "block";
};

// Reusable function that hides the element on our page

let hideElement = element => {
  element.style.display = "none";
};

//Empty fields and hide register an login alert
const clearModalFields = () => {
  registerUsername.value = "";
  registerPassword.value = "";
  registerPassword2.value = "";
  registerAlert.classList.add("d-none");
  registerAlert.innerHTML = "";

  logInUsername.value = "";
  logInPassword.value = "";
  loginAlert.classList.add("d-none");
  loginAlert.innerHTML = "";
};

//Fade out modal function

const fadeOutModal = element => {
  element.style.animation = "fadeOut 0.8s";
  setTimeout(function() {
    element.style.animation = "";
    element.style.display = "none";
  }, 800);
};

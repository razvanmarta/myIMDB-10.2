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

function outsideModal(event) {
  console.log(event.target);
  if (event.target === modal) {
    fadeOutModal(modal);
  }
  if (event.target === modalAuth) {
    fadeOutModal(modalAuth);
  }
  if (event.target === modalLogin) {
    fadeOutModal(modalLogin);
  }
  if (event.target === searchModal) {
    fadeOutModal(searchModal);
  }
}

// USE THIS INSTEAD OF window.location.href
const checkPath = state => {
  const path = window.location.href
    .split("/")
    .slice(-1)[0]
    .split(".")[0];
  if (!state) {
    switch (path) {
      case "home":
        disableButtons(addModalBtn);
        addModalBtn.setAttribute("tooltip", "tooltip");
        break;
      case "details":
        getTrailer();
        break;
      default:
        console.log("You are on creators Page");
    }
  } else {
    switch (path) {
      case "home":
        enableButtons(addModalBtn);
        addModalBtn.removeAttribute("tooltip");
        break;
      case "details":
        getMovie();
        getTrailer();
        break;
      default:
        console.log("You are on creators Page");
    }
  }
};

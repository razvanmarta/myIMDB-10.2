const apiURLl = "https://movies-api-siit.herokuapp.com";
const registerURL = apiURLl + "/auth/register";
const loginURL = apiURLl + "/auth/login";
const logoutURL = apiURLl + "/auth/logout";

// Register function
function registerNewUser(url, user) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      if (response.status == 200) {
        hideElement(modalAuth);
        clearModalFields();
        registratedAlert.classList.remove("d-none");
        setTimeout(function() {
          registratedAlert.classList.add("d-none");
        }, 3000);
      } else if (response.status == 409) {
        registerAlert.innerHTML = "Username already exists!";
        registerAlert.classList.remove("d-none");
      }
      return response.json();
    })
    .then(data => {
      const { accessToken } = data;
      sessionStorage.setItem("accessToken", accessToken);
      if (checkIfLoggedIn()) {
        newUser = sessionStorage.getItem("userName");
        showUserIsLoggedIn();
        displayUserName(newUser);
      }
    })
    .catch(error => console.log(error));
}

// Login function
function logIn(url, user) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      if (response.status == 200) {
        hideElement(modalLogin);
      } else if (response.status == 401) {
        loginAlert.innerHTML = "User not found/wrong password";
        loginAlert.classList.remove("d-none");
      }
      return response.json();
    })
    .then(data => {
      const { accessToken } = data;
      sessionStorage.setItem("accessToken", accessToken);
      if (checkIfLoggedIn()) {
        showUserIsLoggedIn();
        displayUserName(user.username);
      }
    })
    .catch(error => console.log(error));
}

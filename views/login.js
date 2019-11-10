const logInEventButton = document.getElementById("login-event-button");
logInEventButton.addEventListener("click", function(event) {
  event.preventDefault();

  if (!loginAlert.classList.contains("d-none")) {
    loginAlert.classList.add("d-none");
    loginAlert.innerHTML = "";
  }

  if (logInUsername.value === "") {
    loginAlert.classList.remove("d-none");
    loginAlert.innerHTML = "Username cannot be empty";
    logInUsername.value = "";
    return;
  }

  if (logInPassword.value === "") {
    loginAlert.classList.remove("d-none");
    loginAlert.innerHTML = "Password cannot be empty";
    return;
  }

  let logInUser = {
    username: logInUsername.value,
    password: logInPassword.value
  };
  // Create the globaly accesable userObject
  sessionStorage.setItem("userName", logInUser.username);

  logIn(loginURL, logInUser);
});

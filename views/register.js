// Register button event

const addAccountButton = document.getElementById("create-account-button");
addAccountButton.addEventListener("click", function(event) {
  event.preventDefault();

  if (!registerAlert.classList.contains("d-none")) {
    registerAlert.classList.add("d-none");
  }

  if (registerUsername.value === "") {
    registerAlert.classList.remove("d-none");
    registerAlert.innerHTML = "Username cannot be empty";
    return;
  }

  if (registerPassword.value.length < 8) {
    registerAlert.classList.remove("d-none");
    registerAlert.innerHTML = "Password must be at least 8 characters.";
    registerPassword.value = registerPassword.value + "";
    return;
  }

  if (registerPassword.value !== registerPassword2.value) {
    registerAlert.classList.remove("d-none");
    registerAlert.innerHTML = "Passwords do not match! ";
    return;
  }

  let user = {
    username: registerUsername.value,
    password: registerPassword.value
    //url: registerURL
  };

  // Create the globaly accesable userObject
  sessionStorage.setItem("userName", user.username);

  // const newUser = new User (user);
  registerNewUser(registerURL, user);
});

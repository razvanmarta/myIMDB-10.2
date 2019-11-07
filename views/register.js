// Register button event

const addAccountButton = document.getElementById("create-account-button");
addAccountButton.addEventListener("click", function(event) {
  event.preventDefault();

  if (!registerAlert.classList.contains("hidden")) {
    registerAlert.classList.add("hidden");
    registerAlert.innerHTML = "";
  }

  if (registerUsername.value === "") {
    registerAlert.classList.remove("hidden");
    registerAlert.innerHTML = "Username cannot be empty";
    registerUsername.value = "";
    return;
  }

  if (registerPassword.value.length < 8) {
    registerAlert.classList.remove("hidden");
    registerAlert.innerHTML = "Password must be at least 8 characters.";
    registerPassword.value = registerPassword.value + "";
    return;
  }

  if (registerPassword.value !== registerPassword2.value) {
    registerAlert.classList.remove("hidden");
    registerAlert.innerHTML = "Passwords do not match! ";
    return;
  }

  let user = {
    username: registerUsername.value,
    password: registerPassword.value
    //url: registerURL
  };

  // const newUser = new User (user);
  registerNewUser(registerURL, user);
});

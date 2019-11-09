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
      console.log("RESPONSE: ", response);
      if (response.status == 200) {
        modalAuth.style.display = "none";
        registerUsername.value = "";
        registerPassword.value = "";
        registerPassword2.value = "";
        registratedAlert.classList.remove("d-none");
        // setTimeout(function() {
        //   registratedAlert.classList.add("d-none");
        // }, 3000);
      } else if (response.status == 409) {
        registerAlert.innerHTML = "Username already exists!";
        registerAlert.classList.remove("d-none");
      }
      return response.json();
    })
    .then(data => {
      const { accessToken } = data;
      sessionStorage.setItem("accessToken", accessToken);
    });
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
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

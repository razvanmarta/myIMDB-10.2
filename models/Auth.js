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
        modalAuth.close();
        registerUsername.value = "";
        registerPassword.value = "";
        registerPassword2.value = "";

        alert("Registration done");
      } else if (response.status == 409) {
        registerAlert.innerHTML = "Username already exists!";
        registerAlert.classList.remove("hidden");
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

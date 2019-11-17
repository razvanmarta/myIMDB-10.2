const apiURLl = "https://movies-api-siit.herokuapp.com";
const registerURL = apiURLl + "/auth/register";
const loginURL = apiURLl + "/auth/login";
const logoutURL = apiURLl + "/auth/logout";

class User {
  constructor({ username, password, endpoint }) {
    this.username = username;
    this.password = password;
    this.endpoint = endpoint;
    this.errorMessage = "";
    this.options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    };
  }
  async loginUser() {
    try {
      const response = await fetch(this.endpoint, this.options);
      const data = await response.json();
      if (response.status !== 200) {
        throw data.message;
      }
      const { accessToken } = data;
      sessionStorage.setItem("accessToken", accessToken);
      if (checkIfLoggedIn()) {
        hideElement(modalLogin);
        showUserIsLoggedIn();
        displayUserName(this.username);
      }
    } catch (error) {
      console.log(error);
      loginAlert.innerHTML = error;
      loginAlert.classList.remove("d-none");
    }
  }

  async registerNewUser() {
    try {
      const response = await fetch(this.endpoint, this.options);
      const data = await response.json();
      if (response.status !== 200) {
        throw data.message;
      }
      const { accessToken } = data;
      // TODO - no DOM manipulations
      loginAlert.innerHTML = data.message;
      sessionStorage.setItem("accessToken", accessToken);
      if (checkIfLoggedIn()) {
        clearModalFields();
        hideElement(modalAuth);
        showUserIsLoggedIn();
        displayUserName(this.username);
        registratedAlert.classList.remove("d-none");
        // setTimeout(function() {
        //   registratedAlert.classList.add("d-none");
        // }, 3000);
      }
    } catch (error) {
      console.log(error);
      registerAlert.innerHTML = error;
      registerAlert.classList.remove("d-none");
    }
  }

  static logOutUser(token) {
    fetch(logoutURL, {
      method: "GET",
      headers: {
        "x-auth-token": `${token}`
      }
    })
      .then(response => {
        if (window.location.href.includes("details.html")) {
          movieDetails.displayMovieDetails();
        }
        console.log(response);
        return response.json();
      })
      .then(message => console.log(message));
  }
}

// Variables!!! check here if the element you need is not already assigned to a variable
// Here is where you will add it if it's not

const movieList = document.querySelector(".movieList");
const apiURL = "https://movies-api-siit.herokuapp.com/movies";
let newUser = sessionStorage.getItem("userName");

// TODO - nu are sens sa fie ID-uri pe fiecare din ele
// id-urile pot fi puse pe containere
// de exemplu un id pe nav-bar si celelalte luate dupa text sau dupa clasa sau etc
/*
* <ul id="top-navigation" class="navigation-menu">
            <li class="menu-item home">
              <i class="fas fa-home fa-lg"></i> Home
            </li>
            <li class="menu-item login">
              <i class="fas fa-user fa-lg"></i> Login
            </li>
            <li class="menu-item register">
              <i class="fas fa-user-plus fa-lg"></i> Register
            </li>
            <li class="menu-item logout">
              <i class="fas fa-sign-out-alt fa-lg"></i> Logout
            </li>
          </ul>
*
* */
//const topNavbar = document.getElementById("top-navigation");

// TODO - mi-ar placea sa vad variabilele astea globale - macar grupate in obiecte de forma:
/*

const navbar = {
    homeBtn: topNavbar.querySelector(".home")
    ....
};

// const loginModal = document.getElementById("id02")

const login = {
    closeLogin: loginModal.getElementById("id02"),
    ....
};


// asta e pentru a evita "poluarea" scopului global ( obiectului window) cu prea multe variabile
// punandu-le ca priprietati pe obiecte, ele devin oarecum "ascunse"
*
* */

// Navbar variables
const homeBtn = document.getElementById("home-button");
const loginBtn = document.getElementById("login-button");
const registerBtn = document.getElementById("register-button");
const logOutBtn = document.getElementById("logout-button");
const userContainer = document.getElementById("userContainer");
const helloUser = document.getElementById("helloUser");
const creatorsBtn = document.getElementById("creators");

// Register variables
const modalAuth = document.getElementById("id01");
const closeRegister = document.getElementById("close-register-btn");
const registerUsername = document.getElementById("exampleInputUsername");
const registerPassword = document.getElementById("exampleInputPassword1");
const registerPassword2 = document.getElementById("exampleInputPassword2");
let registerAlert = document.getElementById("register-alert");
let registratedAlert = document.getElementById("registrated-alert");
const linkToLogin = document.getElementById("link-login");
const fadeout = document.getElementsByClassName("fade-out");

//Login variables
const modalLogin = document.getElementById("id02");
const closeLogin = document.getElementById("close-login-btn");
const logInUsername = document.getElementById("login-username");
const logInPassword = document.getElementById("login-password");
let loginAlert = document.getElementById("login-alert");
const linkToRegister = document.getElementById("link-register");

// Function triggered on movie hover, creates the click for details overlay
const showMovieInfo = container => {
  const filmInfo = document.createElement("div");
  filmInfo.classList.add("film-info");
  filmInfo.innerHTML = `<div>
      <h4 class="filmInfo-Title">Click for Details</h4>
      <i class="fas fa-info-circle fa-4x"></i>
    </div>`;
  container.appendChild(filmInfo);
};

// Function triggered on mouse leaving the movie container, removes overlay from movie item
const removeMovieInfo = container => {
  container.children[1].remove();
};

// Store movie id in session storage and switch url to /details/html
const showDetailsPage = movie => {
  sessionStorage.setItem("movieID", movie._id);
  sessionStorage.setItem("imdbID", movie.imdbID);
  window.location = `details.html`;
};

// Create the movie card
const createMovieItem = movie => {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("movie-item");
  movie.Poster !== "N/A"
    ? (itemContainer.innerHTML = `
      <div>
        <p class="movieItem-Title ">${movie.Title}</p>
        <p class="movieItem-details">${movie.Year}, ${movie.Genre}</p>
        <p class="movieItem-details">IMDB Rating: ${movie.imdbRating}</p>
        <img class="poster"src='${movie.Poster}'/>
      </div>`)
    : (itemContainer.innerHTML = `
    <div>
      <p class="movieItem-Title">${movie.Title}</p>
      <p class="movieItem-details">${movie.Year}, ${movie.Genre}</p>
      <p class="movieItem-details">IMDB Rating: ${movie.imdbRating}</p>
      <div class="placeholder"></div>
    </div>`);
  movieList.appendChild(itemContainer);
  itemContainer.addEventListener("mouseenter", () =>
    showMovieInfo(itemContainer)
  );
  itemContainer.addEventListener("mouseleave", () =>
    removeMovieInfo(itemContainer)
  );
  itemContainer.addEventListener("click", () => showDetailsPage(movie));
};

//Open register-modal eventlistener
registerBtn.addEventListener("click", () => {
  displayElement(modalAuth);
});

//Close register-modal eventlistener
closeRegister.addEventListener("click", () => {
  clearModalFields();
  fadeOutModal(modalAuth);
});

//Open login-modal eventlistener
loginBtn.addEventListener("click", () => {
  displayElement(modalLogin);
});

//Close login-modal eventlistener
closeLogin.addEventListener("click", () => {
  clearModalFields();
  fadeOutModal(modalLogin);
});

const addModalBtn = document.getElementById("add-movie");

// Show LoggedIn
const showUserIsLoggedIn = () => {
  hideElement(loginBtn);
  hideElement(registerBtn);
  displayElement(logOutBtn);

  hideElement(registerBurgerBtn);
  hideElement(loginBurgerBtn);
  displayElement(logoutBurgerBtn);

  displayElement(userContainer);
  checkPath(true);
};

//Brings back Login and Register buttons to page and logs the user out
const showUserIsLoggedOut = () => {
  const token = sessionStorage.getItem("accessToken");
  User.logOutUser(token);
  clearModalFields();
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("userName");
  displayElement(loginBtn);
  displayElement(registerBtn);
  hideElement(logOutBtn);

  hideElement(logoutBurgerBtn);
  displayElement(registerBurgerBtn);
  displayElement(loginBurgerBtn);

  hideElement(userContainer);
  checkPath(false);
};

//Switch to login modal, from register modal function
const switchRegisterToLogin = () => {
  clearModalFields();
  hideElement(modalAuth);
  displayElement(modalLogin);
};

//Switch to register modal, from login modal function
const switchLoginToRegister = () => {
  clearModalFields();
  hideElement(modalLogin);
  displayElement(modalAuth);
};

//Event Listeners
homeBtn.addEventListener("click", () => (window.location = "home.html"));
logOutBtn.addEventListener("click", () => showUserIsLoggedOut());
linkToLogin.addEventListener("click", () => switchRegisterToLogin());
linkToRegister.addEventListener("click", () => switchLoginToRegister());
creatorsBtn.addEventListener(
  "click",
  () => (window.location = "creators.html")
);

//Initial Call to fetch the movies from the database
if (window.location.href.includes("home.html")) {
  makeCallToServer(apiURL);
}

if (checkIfLoggedIn()) {
  showUserIsLoggedIn();
  displayUserName(newUser);
}

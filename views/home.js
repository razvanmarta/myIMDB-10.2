// Variables!!! check here if the element you need is not already assigned to a variable
// Here is where you will add it if it's not

const movieList = document.querySelector(".movieList");
const apiURL = "https://movies-api-siit.herokuapp.com/movies";
let newUser = sessionStorage.getItem("userName");

// Navbar variables
const homeBtn = document.getElementById("home-button");
const loginBtn = document.getElementById("login-button");
const registerBtn = document.getElementById("register-button");
const logOutBtn = document.getElementById("logout-button");
const userContainer = document.getElementById("userContainer");
const helloUser = document.getElementById("helloUser");

// Register variables
const modalAuth = document.getElementById("id01");
const closeRegister = document.getElementById("close-register-btn");
const registerUsername = document.getElementById("exampleInputUsername");
const registerPassword = document.getElementById("exampleInputPassword1");
const registerPassword2 = document.getElementById("exampleInputPassword2");
let registerAlert = document.getElementById("register-alert");
let registratedAlert = document.getElementById("registrated-alert");

// Function triggered on movie hover, shows the click for details overlay
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
        <img class="poster"src='${movie.Poster}'/>
      </div>`)
    : (itemContainer.innerHTML = `
    <div>
      <p class="movieItem-Title">${movie.Title}</p>
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

// Open register-modal function
let displayElement = element => {
  element.style.display = "block";
};

//Close register-modal function + empty fields and hide alert if it's the case
let hideElement = element => {
  element.style.display = "none";
};

const clearModalFields = () => {
  registerUsername.value = "";
  registerPassword.value = "";
  registerPassword2.value = "";
  registerAlert.classList.add("d-none");
  registerAlert.innerHTML = "";
};

//Open register-modal eventlistener
registerBtn.addEventListener("click", () => {
  console.log("click");
  displayElement(modalAuth);
});

//Close register-modal eventlistener
closeRegister.addEventListener("click", () => {
  clearModalFields();
  hideElement(modalAuth);
});

const showUserIsLoggedIn = () => {
  hideElement(loginBtn);
  hideElement(registerBtn);
  displayElement(logOutBtn);
  displayElement(userContainer);
};

const showUserIsLoggedOut = () => {
  displayElement(loginBtn);
  displayElement(registerBtn);
  hideElement(logOutBtn);
  hideElement(userContainer);
};
//Event Listeners
homeBtn.addEventListener("click", () => (window.location = "home.html"));
loginBtn.addEventListener("click", () => showUserIsLoggedIn());
logOutBtn.addEventListener("click", () => showUserIsLoggedOut());

// Used to handle servercalls for movies
const makeCallToServer = async apiURL => {
  movieList.innerHTML = "";
  const request = await fetch(apiURL);
  const data = await request.json();

  const results = data.results;
  const page = data.pagination.links;
  const pageNumber = data.pagination.currentPage;
  pageNr.innerText = ` - ${pageNumber} - `;
  next = page.next;
  prev = page.prev;
  results.forEach(result => createMovieItem(result));
};

//Initial Call to fetch the movies from the database
if (window.location.href.includes("home.html")) {
  makeCallToServer(apiURL);
}

const checkIfLoggedIn = () => {
  const token = sessionStorage.getItem("accessToken");
  if (token) {
    return true;
  } else {
    return false;
  }
};

const displayUserName = user => {
  helloUser.innerText = `Hello, ${user}`;
};

if (checkIfLoggedIn()) {
  showUserIsLoggedIn();
  displayUserName(newUser);
}

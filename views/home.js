// Variables!!! check here if the element you need is not already assigned to a variable
// Here is where you will add it if it's not

const movieList = document.querySelector(".movieList");

// Search related variables
const searchfield = document.getElementById("searchfield");
const search = document.getElementById("search");
const searchCategories = document.getElementById("search-options");

// Navbar variables
const homeBtn = document.getElementById("home-button");
const loginBtn = document.getElementById("login-button");
const registerBtn = document.getElementById("register-button");

// Movie container variables

const prevPage = document.querySelector(".previous-page");
const nextPage = document.querySelector(".next-page");
const pageNr = document.querySelector(".pageNumber");
const apiURL = "https://movies-api-siit.herokuapp.com/movies";

// Register variables
const modalAuth = document.getElementById("id01");
const closeRegister = document.getElementById("close-register-btn");
const registerUsername = document.getElementById("exampleInputUsername");
const registerPassword = document.getElementById("exampleInputPassword1");
const registerPassword2 = document.getElementById("exampleInputPassword2");
let registerAlert = document.getElementById("register-alert");
let registratedAlert = document.getElementById("registrated-alert");

let filteredMovies = () => searchfield.value;

let searchedCategory = () => {
  const selection = searchCategories[searchCategories.selectedIndex].value;
  console.log(selection);
  return selection;
};

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
  window.location = `details.html`;
};

// Create the movie card
const createMovieItem = movie => {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("movie-item");
  movie.Poster !== "N/A"
    ? (itemContainer.innerHTML = `
      <div>
        <p class="movieItem-Title">${movie.Title}</p>
        <img class="poster"src='${movie.Poster}'/>
      </div>`)
    : (itemContainer.innerHTML = `
    <div>
      <p class="movieItem-Title">${movie.Title}</p>
      <div class=placeholder></div>
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

const disableLink = link => {};

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
registerBtn.addEventListener("click", () => displayElement(modalAuth));

//Close register-modal eventlistener
closeRegister.addEventListener("click", () => {
  hideElement(modalAuth);
  clearModalFields();
});

//Event Listeners
homeBtn.addEventListener("click", () => (window.location = "home.html"));
//loginBtn.addEventListener("click", () => logIn(loginURL, user));
searchfield.addEventListener("keyup", filteredMovies);
search.addEventListener("click", renderFilteredMovies);
search.addEventListener("click", () =>
  renderFilteredMovies(searchedCategory())
);
prevPage.addEventListener("click", () => makeCallToServer(prev));
nextPage.addEventListener("click", () => makeCallToServer(next));

//Initial Call to fetch the movies from the database
makeCallToServer(apiURL);

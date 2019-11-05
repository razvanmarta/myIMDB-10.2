const movieList = document.querySelector(".movieList");
const searchfield = document.getElementById("searchfield");
const search = document.getElementById("search");
const searchCategories = document.getElementById("search-options");
const homeBtn = document.getElementsByClassName("menu-item")[0];
const loginBtn = document.getElementsByClassName("menu-item")[1];
const registerBtn = document.getElementsByClassName("menu-item")[2];
const prevPage = document.querySelector(".previous-page");
const nextPage = document.querySelector(".next-page");
const pageNr = document.querySelector(".pageNumber");

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

//Event Listeners
homeBtn.addEventListener("click", () => (window.location = "home.html"));
loginBtn.addEventListener("click", () => logIn(loginURL, user));
registerBtn.addEventListener("click", () => registerNewUser(registerURL, user));
searchfield.addEventListener("keyup", filteredMovies);
search.addEventListener("click", renderFilteredMovies);
search.addEventListener("click", () =>
  renderFilteredMovies(searchedCategory())
);
prevPage.addEventListener("click", () => makeCallToServer(prev));
nextPage.addEventListener("click", () => makeCallToServer(next));

//Initial Call to fetch the movies from the database
makeCallToServer(apiURL);

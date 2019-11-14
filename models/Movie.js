// TODO - these functions might stay in an object (not a class) in order to avoid global scope pollution
// !!!!! Challenge - even more - you could have a self invoked function that could return that object
// - in order to encapsulate private variables and private functions that do not need to be exposed to the global scope
//

let next = null; //nextPage
let prev = null; //previousPage

// Used to handle servercalls for movies
const makeCallToServer = async apiURL => {
  try {
    const request = await fetch(apiURL);
    console.log(request);
    const data = await request.json();
    console.log(data);
    const results = data.results;
    const page = data.pagination.links;
    const pageNumber = data.pagination.currentPage;
    // TODO - no DOM manipulations here
    pageNr.innerText = ` - ${pageNumber} - `;
    next = page.next;
    prev = page.prev;
    disablePaginationButton();
    // TODO - no DOM manipulations here
    movieList.innerHTML = "";
    results.forEach(result => createMovieItem(result));
  } catch (error) {
    console.log(error);
  }
};

const renderFilteredMovies = async param => {
  const filteredFilms = filteredMovies();
  console.log(filteredFilms.length);
  if (!filteredFilms) {
    return;
  }
  const request = await fetch(
    `https://movies-api-siit.herokuapp.com/movies?${param}=${filteredFilms}`
  );
  const data = await request.json();
  const results = await data.results;
  const page = await data.pagination.links;
  const pageNumber = data.pagination.currentPage;
  // TODO - no DOM manipulations here
  pageNr.innerText = ` - ${pageNumber} - `;
  next = page.next;
  prev = page.prev;
  disablePaginationButton();
  movieList.innerHTML = "";
  results.forEach(result => createMovieItem(result));
  // searchfield.value = "";
};

// make call to server for details page
const getMovie = async () => {
  let movieID = sessionStorage.getItem("movieID");
  try {
    const response = await fetch(
      `https://movies-api-siit.herokuapp.com/movies/${movieID}`
    );
    const movie = await response.json();
    Object.assign(movieDetails, movie);
    movieDetails.displayMovieDetails();
  } catch (error) {
    detailsPageError();
    console.log("Error getting movie :-): ", error);
  }
};
// get trailer from custom API
const getTrailer = async () => {
  let movieID = sessionStorage.getItem("imdbID");
  try {
    const trailerResonse = await fetch(
      `https://imdb-extras.herokuapp.com/${movieID}/trailer`
    );
    const trailer = await trailerResonse.json();
    displayTrailer(trailer);
  } catch (error) {
    console.log("Error getting trailer", error);
  }
};

//update edit details
const updateMovie = movieDetails => {
  const accessToken = sessionStorage.getItem("accessToken");
  delete movieDetails._id;
  const id = sessionStorage.getItem("movieID");

  fetch(`https://movies-api-siit.herokuapp.com/movies/${id}`, {
    headers: {
      "x-auth-token": accessToken,
      "Content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify(movieDetails)
  })
    .then(res => {
      if (res.ok) {
        alert("You updated the movie!");
      }
      return res.json();
    })
    .then(data => {
      movieDetails.displayMovieDetails(data);
      movieDetails.editBtnEvents(data);
      console.log("returnData", data);
    })
    .catch(error => console.error(`Error: ${error}`));
};

// add a new movie

const urlS = "https://movies-api-siit.herokuapp.com/movies";
function aNewMovie(urlS, myFilm) {
  console.log(myFilm);
  const tokenAccess = sessionStorage.getItem("accessToken");
  console.log(tokenAccess);
  fetch(urlS, {
    headers: {
      "x-auth-token": tokenAccess,
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(myFilm)
  })
    .then(res => {
      if (res.ok) {
        alert("You added the movie!");
      }
      if (res.status === 403) {
        alert("You need to be authenticated to be able to create a movie");
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}
//delete movie
const deleteMovieFromDb = () => {
  const id = sessionStorage.getItem("movieID");
  const accessToken = sessionStorage.getItem("accessToken");
  fetch(`https://movies-api-siit.herokuapp.com/movies/${id}`, {
    headers: {
      "x-auth-token": accessToken
    },
    method: "DELETE"
  })
    .then(response => {
      console.log(response);
      return response.text();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
};

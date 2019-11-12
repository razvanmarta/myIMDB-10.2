let next = null; //nextPage
let prev = null; //previousPage

// Used to handle servercalls for movies
const makeCallToServer = async apiURL => {
  try {
    movieList.innerHTML = "";
    const request = await fetch(apiURL);
    console.log(request);
    const data = await request.json();
    console.log(data);
    const results = data.results;
    const page = data.pagination.links;
    const pageNumber = data.pagination.currentPage;
    pageNr.innerText = ` - ${pageNumber} - `;
    next = page.next;
    prev = page.prev;
    disablePaginationButton();
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
  movieList.innerHTML = "";
  const request = await fetch(
    `https://movies-api-siit.herokuapp.com/movies?${param}=${filteredFilms}`
  );
  const data = await request.json();
  const results = await data.results;
  const page = await data.pagination.links;
  const pageNumber = data.pagination.currentPage;
  pageNr.innerText = ` - ${pageNumber} - `;
  next = page.next;
  prev = page.prev;
  disablePaginationButton();
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

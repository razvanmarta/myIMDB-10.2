const apiURL = "https://movies-api-siit.herokuapp.com/movies";
let next = null; //nextPage
let prev = null; //previousPage

// Used to handle servercalls for movies
const makeCallToServer = async apiURL => {
  movieList.innerHTML = "";
  const request = await fetch(apiURL);
  const data = await request.json();

  const results = data.results;
  const page = data.pagination.links;
  const pageNumber = data.pagination.currentPage;
  console.log(pageNumber);
  pageNr.innerText = ` - ${pageNumber} - `;
  next = page.next;
  prev = page.prev;
  results.forEach(result => createMovieItem(result));
};

//Search functionality function
const renderFilteredMovies = async param => {
  const filteredFilms = filteredMovies();
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
  next = page.next;
  prev = page.prev;
  results.forEach(result => createMovieItem(result));
  searchfield.value = "";
};

// make call to server for details page
const getMovie = async () => {
  let movieID = sessionStorage.getItem("movieID");
  try {
    const response = await fetch(
      `https://movies-api-siit.herokuapp.com/movies/${movieID}`
    );
    const movie = await response.json();
    displayDetails(movie);
  } catch (error) {
    console.log("Error getting movie :-): ", error);
  }
};

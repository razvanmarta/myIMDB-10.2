let next = null; //nextPage
let prev = null; //previousPage

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
  next = page.next;
  prev = page.prev;
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
    console.log(movie);
    console.log("details", movieDetails);
    Object.assign(movieDetails, movie);
    movieDetails.displayMovieDetails();
  } catch (error) {
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
        return res.json();
      }
    })
    .then(data => {
      movieDetails.displayMovieDetails(data);
      movieDetails.editBtnEvents(data);
      console.log("returnData", data);
    })
    .catch(error => console.error(`Error: ${error}`));
};

//delete movie
const deleteMovieFromDb = () => {
  const id = sessionStorage.getItem("movieID");
  const accessToken = sessionStorage.getItem("accessToken");
  fetch(`https://movies-api-siit.herokuapp.com/movies/${id}`, {
    headers: {
      "x-auth-token": accessToken,
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
  })
}


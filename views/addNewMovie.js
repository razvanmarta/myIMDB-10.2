const modalBtn = document.getElementById("add-movie");
const closeBtn = document.getElementsByClassName("closeFilmBtn")[0];
const modal = document.getElementById("modalFilmContainer");
const saveChange = document.getElementById("saveFilmChanges");
const discardChange = document.getElementById("discardFilmChanges");
const addedNewMovieAlert = document.getElementById("addedNewMovie-alert");

const theMovie = {
  Title: document.getElementById("enterFilmTitle"),
  Genre: document.getElementById("enterGenre"),
  Type: document.getElementById("enterType"),
  Released: document.getElementById("enterReleased"),
  Rated: document.getElementById("enterRated"),
  imdbRating: document.getElementById("enterImdbRating"),
  Director: document.getElementById("enterDirector"),
  Writer: document.getElementById("enterWriter"),
  Actors: document.getElementById("enterActors"),
  Runtime: document.getElementById("enterRuntime"),
  Language: document.getElementById("enterLanguage"),
  Awards: document.getElementById("enterAwards"),
  Plot: document.getElementById("enterPlot")
};

function openModal() {
  modal.style.display = "block";
}

function outsideModal(event) {
  if (event.target === modal) {
    fadeOutModal(modal);
  }
  if (event.target === modalAuth) {
    fadeOutModal(modalAuth);
  }
  if (event.target === modalLogin) {
    fadeOutModal(modalLogin);
  }
}

window.addEventListener("click", outsideModal);

function emptyFilmImpute() {
  theMovie.Title.value = "";
  theMovie.Genre.value = "";
  theMovie.Type.value = "";
  theMovie.Released.value = "";
  theMovie.Rated.value = "";
  theMovie.imdbRating.value = "";
  theMovie.Director.value = "";
  theMovie.Writer.value = "";
  theMovie.Actors.value = "";
  theMovie.Runtime.value = "";
  theMovie.Language.value = "";
  theMovie.Awards.value = "";
  theMovie.Plot.value = "";
}

discardChange.addEventListener("click", emptyFilmImpute);

modalBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", () => {
  fadeOutModal(modal);
});

const saveFilm = () => {
  const movieObj = AddNewFilm.getDataFromInputs();
  const newMovie = new AddNewFilm(movieObj);
  newMovie.saveFilm(movieObj);
};

saveChange.addEventListener("click", saveFilm);

class AddNewFilm {
  constructor(film) {
    (this.Title = film.Title),
      (this.Genre = film.Genre),
      (this.Type = film.Type),
      (this.Released = film.Released),
      (this.Rated = film.Rated),
      (this.imdbRating = film.imdbRating),
      (this.Director = film.Director),
      (this.Writer = film.Writer),
      (this.Actors = film.Actors);
    (this.Runtime = film.Runtime),
      (this.Language = film.Language),
      (this.Awards = film.Awards),
      (this.Plot = film.Plot);
  }

  static getDataFromInputs() {
    const filmInputs = {
      Title: theMovie.Title.value,
      Genre: theMovie.Genre.value,
      Type: theMovie.Type.value,
      Released: theMovie.Released.value,
      Rated: theMovie.Rated.value,
      imdbRating: theMovie.imdbRating.value,
      Director: theMovie.Director.value,
      Writer: theMovie.Writer.value,
      Actors: theMovie.Actors.value,
      Runtime: theMovie.Runtime.value,
      Language: theMovie.Language.value,
      Awards: theMovie.Awards.value,
      Plot: theMovie.Plot.value
    };
    return filmInputs;
  }
  saveFilm(filmInputs) {
    aNewMovie(filmInputs);
    emptyFilmImpute();
    fadeOutModal(modal);
  }
}

const addBanner = () => {
  addedNewMovieAlert.classList.remove("displayNone");
  setTimeout(function() {
    addedNewMovieAlert.classList.add("displayNone");
  }, 3000);
};

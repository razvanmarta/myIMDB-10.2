// TODO - try to group variables into an object
// // asta e pentru a evita "poluarea" scopului global ( obiectului window) cu prea multe variabile
// // punandu-le ca proprietati pe obiecte, ele devin oarecum "ascunse"

const modalBtn = document.getElementById("add-movie");
const closeBtn = document.getElementsByClassName("closeFilmBtn")[0];
const modal = document.getElementById("modalFilmContainer");
const saveChange = document.getElementById("saveFilmChanges");
const discardChange = document.getElementById("discardFilmChanges");

const filmTitle = document.getElementById("enterFilmTitle");
const filmGenre = document.getElementById("enterGenre");
const filmType = document.getElementById("enterType");
const filmReleased = document.getElementById("enterReleased");
const filmRated = document.getElementById("enterRated");
const filmImdbRating = document.getElementById("enterImdbRating");
const filmDirector = document.getElementById("enterDirector");
const filmWriter = document.getElementById("enterWriter");
const filmActors = document.getElementById("enterActors");
const filmRuntime = document.getElementById("enterRuntime");
const filmLanguage = document.getElementById("enterLanguage");
const filmAwards = document.getElementById("enterAwards");
const filmPlot = document.getElementById("enterPlot");

const addedNewMovieAlert = document.getElementById("addedNewMovie-alert");

const filmInfo = [
  filmTitle,
  filmGenre,
  filmType,
  filmReleased,
  filmRated,
  filmImdbRating,
  filmDirector,
  filmWriter,
  filmActors,
  filmRuntime,
  filmLanguage,
  filmAwards,
  filmPlot
];

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
  filmInfo.map(item => (item.value = ""));
}

modalBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", () => {
  fadeOutModal(modal);
});

discardChange.addEventListener("click", emptyFilmImpute);

// saveChange.addEventListener("click", saveFilm);
saveChange.addEventListener("click", () => {
  const obj = AddNewFilm.getValueFromInputs();
  console.log(obj);
  const newMovie = new AddNewFilm(obj);
  console.log(newMovie);
  newMovie.saveFilm(obj);
});

class AddNewFilm {
  constructor(film) {
    // TODO - atentie la sintaxa, vezi unde pui virgula si unde pui punct si virgula
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
  static getValueFromInputs() {
    const obj = {
      Title: filmTitle.value,
      Genre: filmGenre.value,
      Type: filmType.value,
      Released: filmReleased.value,
      Rated: filmRated.value,
      imdbRating: filmImdbRating.value,
      Director: filmDirector.value,
      Writer: filmWriter.value,
      Actors: filmActors.value,
      Runtime: filmRuntime.value,
      Language: filmLanguage.value,
      Awards: filmAwards.value,
      Plot: filmPlot.value
    };
    return obj;
  }
  saveFilm(obj) {
    aNewMovie(obj);
    emptyFilmImpute();
    fadeOutModal(modal);
  }
}

// function saveFilm() {
//   const obj = {
//     Title: filmTitle.value,
//     Genre: filmGenre.value,
//     Type: filmType.value,
//     Released: filmReleased.value,
//     Rated: filmRated.value,
//     imdbRating: filmImdbRating.value,
//     Director: filmDirector.value,
//     Writer: filmWriter.value,
//     Actors: filmActors.value,
//     Runtime: filmRuntime.value,
//     Language: filmLanguage.value,
//     Awards: filmAwards.value,
//     Plot: filmPlot.value
//   };

//   // const myFilm = new AddNewFilm(obj);

//   // add a new movie to database

//   aNewMovie(urlS, obj);

//   emptyFilmImpute();
// }

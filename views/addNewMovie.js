const modalBtn = document.getElementById("add-movie");
const closeBtn = document.getElementsByClassName("closeFilmBtn")[0];
const modal = document.getElementById("modalFilmContainer");
const saveChange = document.getElementById("saveFilmChanges");
const discardChange = document.getElementById("discardFilmChanges");
const filmTitle = document.getElementById("enterFilmTitle");
const filmYear = document.getElementById("enterYear");
const filmRuntime = document.getElementById("enterRuntime");
const filmGenre = document.getElementById("enterGenre");
const filmDirector = document.getElementById("enterDirector");
const filmWriter = document.getElementById("enterWriter");
const filmLanguage = document.getElementById("enterLanguage");
const filmCountry = document.getElementById("enterCountry");
const filmBoxOffice = document.getElementById("enterBoxOffice");
const filmWebsite = document.getElementById("enterWebsite");

const filmInfo = [
  filmTitle,
  filmYear,
  filmRuntime,
  filmGenre,
  filmDirector,
  filmWriter,
  filmLanguage,
  filmCountry,
  filmBoxOffice,
  filmWebsite
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

function emptyFilmImpute() {
  filmInfo.map(item => (item.value = ""));
}

modalBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", () => {
  fadeOutModal(modal);
});

window.addEventListener("click", outsideModal);

discardChange.addEventListener("click", emptyFilmImpute);

saveChange.addEventListener("click", saveFilm);

class AddNewFilm {
  constructor(film) {
    (this.Title = film.Title),
      (this.Year = film.Year),
      (this.Runtime = film.Runtime),
      (this.Genre = film.Genre),
      (this.Director = film.Director),
      (this.Writer = film.Writer),
      (this.Language = film.Language),
      (this.Country = film.Country),
      (this.BoxOffice = film.BoxOffice),
      (this.Website = film.Website);
  }
}

function saveFilm() {
  const obj = {
    Title: filmTitle.value,
    Year: filmYear.value,
    Runtime: filmRuntime.value,
    Genre: filmGenre.value,
    Director: filmDirector.value,
    Writer: filmWriter.value,
    Language: filmLanguage.value,
    Country: filmCountry.value,
    BoxOffice: filmBoxOffice.value,
    Website: filmWebsite.value
  };

  const myFilm = new AddNewFilm(obj);
  console.log(myFilm);

  // add a new movie to database

  aNewMovie(urlS, myFilm);

  emptyFilmImpute();
}

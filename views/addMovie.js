const modal = document.getElementById("modalContainer");
const modalBtn = document.getElementById("add-movie");
const closeBtn = document.getElementsByClassName("closeBtn")[0];
const saveChange = document.getElementById("saveChanges");

modalBtn.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
}

closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
}

window.addEventListener("click", outsideModal);

function outsideModal(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

// function saveFilm() {
//   console.log("Save movie !");
//   let elements = document.getElementById("addMovie-form").elements;
//   console.log(elements);
//   const obj = {};
//   for (let i = 0; i < elements.length; i++) {
//     let item = elements.item(i);
//     console.log(item);
//     obj[item. = item.value;
//     console.log(obj);
//   }

// document.getElementById("demo").innerHTML = JSON.stringify(obj);
// }
class AddedMovie {
  constructor(movie) {
    this.Title = movie.Title;
    this.Year = movie.Year;
    this.Runtime = movie.Runtime;
    this.Genre = movie.Genre;
    this.Director = movie.Director;
    this.Writer = movie.Writer;
    this.Language = movie.Language;
    this.Country = movie.Country;
    this.BoxOffice = movie.BoxOffice;
    this.Website = movie.Website;
  }
  getKeys() {
    console.log(this);
  }
}

saveChange.addEventListener("click", () => {
  // const addMovie = new AddedMovie();
  // addMovie.getKeys();
  let film = document.getElementById("addMovie-form").elements;
  console.log(film);
  film.map(amovie =>{
    const movieItem={};
    movieItem{
      amovie.Title:amovie.value[0]
    }

  })
});

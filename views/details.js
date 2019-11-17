let value = "";

movieDetails = {
  displayMovieDetails: function() {
    const detailsContainer = document.getElementById("movie");

    detailsContainer.innerHTML = `
    <div class = "row m-1">
      <div class= "col-md-4 m-auto text-center">
        <img src = "${this.Poster}" class = "img-thumbnail">
        <div id = "detailsButtons">
        <button class = "btn btn-primary m-1" id = "detailsViewBtn">View IMDB</button>
          <button class = "btn btn-success m-1 show" id = "detailsEditBtn" data-toggle="modal" data-target="#myModal"
          disabled=${true} tooltip tooltip-top 
          tooltip-content = "Login/Register to access this feature">Edit Movie</button>

           <button class = "btn btn-danger m-1" id = "detailsDeleteBtn" disabled=${true} tooltip tooltip-top 
           tooltip-content = "Login/Register to access this feature">Delete Movie</button>
        </div>
      </div>
      <div class="col-md-8">
        <h2 id="Title">${this.Title}</h2>
        <ul class="list-group">
          <li class = "list-group-item" id = "Genre"><strong>Genre:</strong> ${
            this.Genre
          }</li>
          <li class = "list-group-item" id = "Type"><strong>Type:</strong> ${
            this.Type
          }</li>
          <li class = "list-group-item" id = "Released"><strong>Released:</strong> ${
            this.Released
          }</li>
          <li class = "list-group-item" id = "Rated"><strong>Rated:</strong> ${
            this.Rated
          }</li>
          <li class = "list-group-item" id = "imdbRating"><strong>IMDB Rating:</strong> ${
            this.imdbRating
          }</li>
          <li class = "list-group-item" id = "Director"><strong>Director:</strong> ${
            this.Director
          }</li>
          <li class = "list-group-item" id = "Writer"><strong>Writer:</strong> ${
            this.Writer
          }</li>
          <li class = "list-group-item" id = "Actors"><strong>Actors:</strong> ${
            this.Actors
          }</li>
          <li class = "list-group-item" id = "Runtime"><strong>Runtime:</strong> ${
            this.Runtime
          }</li>
          <li class = "list-group-item" id = "Language"><strong>Language:</strong> ${
            this.Language
          }</li>
          <li class = "list-group-item" id = "Awards"><strong>Awards:</strong> ${
            this.Awards
          }</li>
        </ul>
      </div>
    </div>
    <div class = "row">
      <div class = "card card-body m-1">
        <h3 class = "card-title">Plot</h3>
        <hr/>
        <p id = "Plot" class = "card-text" >${this.Plot}</p>
        <hr/>
            <h3 class="card-title">Trailer</h3>
            <hr/>
            <div class="embed-responsive">
              <iframe class="embed-responsive-item" src="" allowfullscreen scrolling ="no"></iframe>
            </div>
      </div>
    </div>
  </div>
    `;

    //event listener for the viewImdb Button with window.open() approach
    let viewImdbBtn = document.querySelector("#detailsViewBtn");

    viewImdbBtn.addEventListener("click", () => {
      const linkToImdb = "https://www.imdb.com/title/" + this.imdbID;
      onclick = window.open(linkToImdb);
    });

    //event listener for the editDetailsBtn
    let editModalCloseBtn = document.querySelector("#editModalClose");
    let editCloseBtn = document.querySelector("#editClose");
    let editDetailsBtn = document.querySelector("#detailsEditBtn");
    let editModal = document.querySelector("#editModal");

    //display data in Edit Modal
    editDetailsBtn.addEventListener("click", () => {
      this.editBtnEvents();
      displayElement(editModal);
    });

    //Delete button
    const deleteMovieBtn = document.getElementById("detailsDeleteBtn");
    deleteMovieBtn.addEventListener("click", openDeleteModal);

    // close and open the Edit Modal
    editModalCloseBtn.addEventListener("click", () => {
      hideElement(editModal);
    });

    editCloseBtn.addEventListener("click", () => {
      hideElement(editModal);
    });

    editSaveBtn.addEventListener("click", () => {
      hideElement(editModal);
    });

    if (checkIfLoggedIn()) {
      enableButtons(editDetailsBtn);
      enableButtons(deleteMovieBtn);
      editDetailsBtn.removeAttribute("tooltip");
      deleteMovieBtn.removeAttribute("tooltip");
    }
  },

  editBtnEvents() {
    let editModalBody = document.querySelector(".modal-body");
    editModalBody.innerHTML = `

          <label for = "editTitle">Title:</label>
          <input class="form-control-me" id="editTitle" name = "Title" value ="${this.Title}">
          
          <label for="editGenre">Genre:</label>
          <input class="form-control-me" name = "Genre" value = "${this.Genre}">

          <label for = "editType">Type:</label>
          <input class="form-control-me" name = "Type" value = "${this.Type}">

          <label for = "editReleased">Released:</label>
          <input class="form-control-me" name = "Released" value = "${this.Released}">

          <label for = "editRated">Rated:</label>
          <input class="form-control-me" name = "Rated" value ="${this.Rated}">

          <label for = "editimdbRating">imdbRating:</label>
          <input class="form-control-me" name = "imdbRating" value ="${this.imdbRating}">

          <label for="editDirector">Director:</label>
          <input class="form-control-me" name = "Director" value = "${this.Director}">

          <label for="editWriter">Writer:</label>
          <input class="form-control-me" name = "Writer" value ="${this.Writer}">

          <label for="editAuthor">Actors:</label>
          <input class="form-control-me" name = "Actors" value ="${this.Actors}">

          <label for="editRuntime">Runtime:</label>
          <input class="form-control-me" name = "Runtime" value = "${this.Runtime}">

          <label for="editLanguage">Language:</label>
          <input class="form-control-me" name = "Language" value = "${this.Language}">

          <label for="editAwards">Awards:</label>
          <input class="form-control-me" name = "Awards" value = "${this.Awards}">

          <label for="editPlot">Plot:</label>
          <input class="form-control-me"  id="editPlot" name = "Plot" value = "${this.Plot}">`;
  }
};

//get the inputs value in the movieDetails propreties

const getEditDetails = movieDetails => {
  let inputs = document.querySelectorAll(".form-control-me");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", event => {
      value = event.value;
      return value;
    });
    movieDetails[inputs[i].name] = inputs[i].value;
  }
  // the Http request with the new Data
  updateMovie(movieDetails);
};

//rereder movie details
let editSaveBtn = document.querySelector("#editSaveChanges");
editSaveBtn.addEventListener("click", () => {
  getEditDetails(movieDetails);
});

// code for getting the trailer
const displayTrailer = trailer => {
  const trailerContainer = document.querySelector(".embed-responsive");
  const trailerSource = document.querySelector(".embed-responsive-item");
  if (trailer.error) {
    trailerContainer.innerHTML = "This item has no trailer";
  } else {
    trailerContainer.classList.add("embed-responsive-16by9");
    trailerSource.setAttribute("src", trailer.embed);
  }
};

getMovie();
getTrailer();

//close modals
function outsideModalDetails(event) {
  if (event.target === modalAuth) {
    fadeOutModal(modalAuth);
  }
  if (event.target === modalLogin) {
    fadeOutModal(modalLogin);
  }
}

window.addEventListener("click", outsideModalDetails);

// alert for successful edited movie
const successEdit = () => {
  registratedAlert.classList.remove("d-none");
  registratedAlert.innerText = "The movie has been successfully updated!";
  setTimeout(() => {
    registratedAlert.classList.add("d-none");
  }, 3000);
};

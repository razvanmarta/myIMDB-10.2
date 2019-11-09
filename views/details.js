movieDetails = {
  displayMovieDetails: function() {
    console.log("From displayMovieDetails: ", this);
    const detailsContainer = document.getElementById("movie");

    detailsContainer.innerHTML = `
    <div class = "row m-1">
      <div class= "col-md-4 m-auto text-center">
        <img src = "${this.Poster}" class = "img-thumbnail">
        <div id = "detailsButtons">
          <button class = "btn btn-primary m-1" id = "detailsViewBtn">View IMDB</button>
          <button class = "btn btn-success m-1 show" id = "detailsEditBtn" data-toggle="modal" data-target="#myModal">Edit Movie</button>
          <button class = "btn btn-danger m-1" id = "detailsDeleteBtn">Delete Movie</button>
        </div>
      </div>
      <div class="col-md-8">
        <h2 id="Title">${this.Title}</h2>
        <ul class="list-group">
          <li class = "list-group-item" id = "Genre"><strong>Genre:</strong> ${this.Genre}</li>
          <li class = "list-group-item" id = "Type"><strong>Type:</strong> ${this.Type}</li>
          <li class = "list-group-item" id = "Released"><strong>Released:</strong> ${this.Released}</li>
          <li class = "list-group-item" id = "Rated"><strong>Rated:</strong> ${this.Rated}</li>
          <li class = "list-group-item" id = "imdbRating"><strong>IMDB Rating:</strong> ${this.imdbRating}</li>
          <li class = "list-group-item" id = "Director"><strong>Director:</strong> ${this.Director}</li>
          <li class = "list-group-item" id = "Writer"><strong>Writer:</strong> ${this.Writer}</li>
          <li class = "list-group-item" id = "Actors"><strong>Actors:</strong> ${this.Actors}</li>
          <li class = "list-group-item" id = "Runtime"><strong>Runtime:</strong> ${this.Runtime}</li>
          <li class = "list-group-item" id = "Language"><strong>Language:</strong> ${this.Language}</li>
          <li class = "list-group-item" id = "Awards"><strong>Awards:</strong> ${this.Awards}</li>
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
    `;

    //event listener in viewImdb Button with window.open() approach

    let viewImdbBtn = document.querySelector("#detailsViewBtn");

    viewImdbBtn.addEventListener("click", () => {
      const linkToImdb = "https://www.imdb.com/title/" + this.imdbID;
      onclick = window.open(linkToImdb);
    });

    //event listener in editDetailsBtn
    let editModalCloseBtn = document.querySelector("#editModalClose");
    let editCloseBtn = document.querySelector("#editClose");
    let editDetailsdBtn = document.querySelector("#detailsEditBtn");

    // close and open the Edit Modal
    let editModal = document.querySelector("#editModal");

    editDetailsdBtn.addEventListener("click", () => {
      this.editBtnEvents();
      displayElement(editModal);
    });

    editModalCloseBtn.addEventListener("click", () => {
      hideElement(editModal);
    });

    editCloseBtn.addEventListener("click", () => {
      editModal.style.display = "none";
    });
  },

  editBtnEvents() {
    let editModal = document.querySelector(".modal-body");

    editModal.innerHTML = `

          <label for = "editTitle">Title:</label>
          <input type="text" class="form-control" id="editTitle" value ="">
          
          <label for="editGenre">Genre:</label>
          <input type="text" class="form-control" id="editGenre" value=" ">

          <label for = "editType">Type:</label>
          <input type="text" class="form-control" id="editType" value=" ">

          <label for = "editReleased">Released:</label>
          <input type="text" class="form-control" id="editReleased" value=" ">

          <label for = "editRated">Rated:</label>
          <input type="text" class="form-control" id="editRated" value=" ">

          <label for = "editimdbRating">imdbRating:</label>
          <input type="text" class="form-control" id="editimdbRating" value=" ">

          <label for="editDirector">Director:</label>
          <input type="text" class="form-control" id="editDirector" value=" ">

          <label for="editWriter">Writer:</label>
          <input type="text" class="form-control" id="editWriter" value=" ">

          <label for="editAuthor">Actors:</label>
          <input type="text" class="form-control" id="editActors" value=" ">

          <label for="editRuntime">Runtime:</label>
          <input type="text" class="form-control" id="editRuntime" value=" ">

          <label for="editLanguage">Language:</label>
          <input type="text" class="form-control" id="editLanguage" value=" ">

          <label for="editAwards">Awards:</label>
          <input type="text" class="form-control" rows="3" id="editAwards" value=" ">

          <label for="editPlot">Plot:</label>
          <textarea class="form-control"  id="editPlot" rows="3" value = " "></textarea>
        </div>
      </div>
    </div>
  </div>
  </div>`;

    let editModalTitle = document.querySelector(".modal-title");
    editModalTitle.innerText = `Edit Movie: ` + `${this.Title}`;
  }
};

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

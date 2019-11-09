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


    //event listener for the viewImdb Button with window.open() approach  
    let viewImdbBtn = document.querySelector("#detailsViewBtn");

    viewImdbBtn.addEventListener("click", () => {
      const linkToImdb = "https://www.imdb.com/title/" + this.imdbID;
      onclick = window.open(linkToImdb);
    });

    //event listener for the editDetailsBtn
    let editModalCloseBtn = document.querySelector("#editModalClose");
    let editCloseBtn = document.querySelector("#editClose");
    let editDetailsdBtn = document.querySelector("#detailsEditBtn");

    
    let editModal = document.querySelector("#editModal");

    //display data in Edit Modal
    editDetailsdBtn.addEventListener("click", () => {
      this.editBtnEvents();
      displayElement(editModal);
    })


    // close and open the Edit Modal
    editModalCloseBtn.addEventListener("click", () => {
      hideElement(editModal);
    })

    editCloseBtn.addEventListener("click", () => {
      hideElement(editModal);
    })

  },

  editBtnEvents() {
    let editModalBody = document.querySelector(".modal-body");

  editModalBody.innerHTML = `

          <label for = "editTitle">Title:</label>
          <textarea class="form-control-me" id="editTitle" value = " "></textarea>
          
          <label for="editGenre">Genre:</label>
          <textarea class="form-control-me" id="editGenre" value=" "></textarea>

          <label for = "editType">Type:</label>
          <textarea class="form-control-me" id="editType" name = "Genre" value=" "></textarea>

          <label for = "editReleased">Released:</label>
          <textarea class="form-control-me" id="editReleased" value=" "></textarea>

         <label for = "editRated">Rated:</label>
         <textarea class="form-control-me" id="editRated" value=" "></textarea>

          <label for = "editimdbRating">imdbRating:</label>
          <textarea class="form-control-me" id="editimdbRating" value=" "></textarea>

          <label for="editDirector">Director:</label>
          <textarea class="form-control-me" id="editDirector" value=" "></textarea>

          <label for="editWriter">Writer:</label>
          <textarea class="form-control-me" id="editWriter" value=" "></textarea>

          <label for="editAuthor">Actors:</label>
          <textarea class="form-control-me" id="editActors" value=" "></textarea>

          <label for="editRuntime">Runtime:</label>
          <textarea class="form-control-me" id="editRuntime" value=" "></textarea>

          <label for="editLanguage">Language:</label>
          <textarea class="form-control-me" id="editLanguage" value=" "></textarea>

          <label for="editAwards">Awards:</label>
          <textarea class="form-control-me" rows="3" id="editAwards" value=" "></textarea>

          <label for="editPlot">Plot:</label>
          <textarea class="form-control-me"  id="editPlot" rows="3" value = " "></textarea>
        </div>
      </div>
    </div>
  </div>
  </div>`;

    let editModalTitle = document.querySelector(".modal-title");
    editModalTitle.innerText = `Edit Movie: ` + `${this.Title}`;
  }
};
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
  console.log(trailerContainer);

};


getMovie();
getTrailer();

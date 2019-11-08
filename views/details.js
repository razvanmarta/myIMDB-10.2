
movieDetails = {

  displayMovieDetails: function () {
    console.log(this)
    const detailsContainer = document.getElementById("movie");

    detailsContainer.innerHTML = `
    <div class = "row m-1">
    <div clas s= "col-md-4 m-auto text-center">
      <img src = "${this.Poster}" class = "img-thumbnail">
      <div id = "detailsButtons">
        <button class = "btn btn-primary m-1" id = "detailsViewBtn">View IMDB</button>
        <button class = "btn btn-success m-1" id = "detailsEditBtn" data-toggle="modal" data-target="#exampleModal">
        Edit Movie</button>
        <button class = "btn btn-danger m-1" id = "detailsDeleteBtn">Delete Movie</button>
      </div>
    </div>
    <div class="col-md-8">
      <h2 id = "Title">${this.Title}</h2>
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
    <div class = "card card-body">
      <h3 class = "card-title">Plot</h3>
      <hr/>
      <p id = "Plot" class = "card-text" >${this.Plot}</p>
      </div>
    </div>
    </div>`;

    //event listener in viewImdb Button with window.open() approach  

    let viewImdbBtn = document.querySelector("#detailsViewBtn");

    viewImdbBtn.addEventListener("click", () => {
    const linkToImdb = "https://www.imdb.com/title/" + this.imdbID
    onclick = window.open(linkToImdb);
    })

    //event listener in editDetailsBtn
    let editDetailsdBtn = document.querySelector("#detailsEditBtn")
    editDetailsdBtn.addEventListener("click", () => {
      console.log("edit");


    })

  },

  editBtnEvents() { }

};



getMovie();


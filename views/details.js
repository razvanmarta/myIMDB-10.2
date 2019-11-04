const displayDetails = movie => {
  let movieKeys = Object.keys(movie);

  for (let i = 0; i < movieKeys.length; i++) {

    let entrieItem = movieKeys[i];
    let title = entrieItem + ": " + movie[entrieItem];
    let entrieContent = document.createElement("p");
    entrieContent.innerText = title;
    entrieContent.setAttribute("id", entrieItem)

    switch (entrieItem) {
      case "Title":
          document.querySelector(".detailsTitle").appendChild(entrieContent)

        break
      case "Plot":
        document.querySelector(".detailsPlot").appendChild(entrieContent)
        break

      case "Poster":
        entrieContent = document.createElement("img");
        document.querySelector(".detailsPoster").appendChild(entrieContent)
        entrieContent.setAttribute("src", movie[entrieItem]);

        break

      case "_id":
        entrieContent.innerText = null
        break

      case "Response":
        entrieContent.innerText = null
        break

      default:
          document.querySelector(".detailsInfo").appendChild(entrieContent);

    }

    
  }
}

getMovie();
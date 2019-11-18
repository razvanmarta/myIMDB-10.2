const searchBtn = document.getElementById("search-button");
const searchModal = document.getElementById("searchModal");
const refreshList = document.querySelector(".refresh-movielist");

refreshList.addEventListener("click", () => {
  makeCallToServer(apiURL);
});
// Open search modal
searchBtn.addEventListener("click", () => {
  displayElement(searchModal);
});

const searchMovieDataBase = {
  addEListeners: function() {
    const searchModalCloseBtn = document.querySelector("#searchModalClose");
    let searchCloseBtn = document.querySelector("#searchClose");

    searchModalCloseBtn.addEventListener("click", () => {
      hideElement(searchModal);
    });

    searchCloseBtn.addEventListener("click", () => {
      hideElement(searchModal);
    });
  }
};
searchMovieDataBase.addEListeners();

let doTheSearch = document.querySelector("#searchButton");
doTheSearch.addEventListener("click", () => {
  hideElement(searchModal);
  const searchObject = getValuesFromInputFields();
  renderFilteredMovies(createSearchUrl(searchObject));
});
const getValuesFromInputFields = () => {
  const searchObject = {};
  let inputs = document.querySelectorAll(".form-control-me");
  inputs.forEach(input => {
    input.addEventListener("keyup", event => {
      value = event.value;
      return value;
    });
    input.value
      ? (searchObject[input.name] = input.value)
      : console.log(`Field ${input.name} is empty => not adding it to object`);
  });
  inputs.forEach(input => (input.value = ""));
  return searchObject;
};

const createSearchUrl = querry => {
  let urlNeeded = "https://movies-api-siit.herokuapp.com/movies?";
  let querryString = Object.entries(querry);
  querryString.forEach(keyValuePair => {
    urlNeeded += keyValuePair[0] + "=" + keyValuePair[1] + "&";
  });
  const finalResult = urlNeeded.slice(0, -1);
  return finalResult;
};

searchBurgerBtn.addEventListener("click", () => {
  displayElement(searchModal);
});

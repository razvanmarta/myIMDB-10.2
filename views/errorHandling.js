const detailsPageError = () => {
  const detailsContainer = document.getElementById("movie");
  detailsContainer.innerHTML = `
  <div class="container">
  <p class="text-center">
  There was an error processing your request <a href="#" class="alert-link">Go back to movie list</a>. Give it a click if you like.
</p>
    <div class = "d-flex justify-content-center m-3">
    <button type="button" class="btn btn-warning">Reload</button>
    </div>
  </div>
  `;
};

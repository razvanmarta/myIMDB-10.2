const detailsPageError = () => {
  const detailsContainer = document.getElementById("movie");
  detailsContainer.innerHTML = `
    <div>
      <h1>There was an error processing your request</h1>
      <p> Click to try again </p>
      <button>Reload</button>
    </div>
  `;
};

// Movie container variables

const prevPage = document.querySelector(".previous-page");
const nextPage = document.querySelector(".next-page");
const pageNr = document.querySelector(".pageNumber");

const disablePaginationButton = () => {
  !prev ? (prevPage.disabled = true) : (prevPage.disabled = false);
  !next ? (nextPage.disabled = true) : (nextPage.disabled = false);
};

const updatePageNumber = (pageNumber, nrOfPages) => {
  pageNr.innerText = `${pageNumber} of ${nrOfPages}`;
};

prevPage.addEventListener("click", () => makeCallToServer(prev));
nextPage.addEventListener("click", () => makeCallToServer(next));

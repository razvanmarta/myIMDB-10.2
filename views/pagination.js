// Movie container variables

const prevPage = document.querySelector(".previous-page");
const nextPage = document.querySelector(".next-page");

const firstPage = document.querySelector(".first-page");
const lastPage = document.querySelector(".last-page");
const pageNr = document.querySelector(".pageNumber");

const disablePaginationButton = () => {
  !prev ? (prevPage.disabled = true) : (prevPage.disabled = false);
  !next ? (nextPage.disabled = true) : (nextPage.disabled = false);
  !prev ? (firstPage.disabled = true) : (firstPage.disabled = false);
  !next ? (lastPage.disabled = true) : (lastPage.disabled = false);
};

const updatePageNumber = (pageNumber, nrOfPages) => {
  pageNr.innerText = `${pageNumber} of ${nrOfPages}`;
};

prevPage.addEventListener("click", () => makeCallToServer(prev));
nextPage.addEventListener("click", () => makeCallToServer(next));
firstPage.addEventListener("click", () => makeCallToServer(first));
lastPage.addEventListener("click", () => makeCallToServer(last));

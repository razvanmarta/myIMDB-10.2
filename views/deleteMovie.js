// TODO - try to group variables into an object
// // asta e pentru a evita "poluarea" scopului global ( obiectului window) cu prea multe variabile
// // punandu-le ca proprietati pe obiecte, ele devin oarecum "ascunse"

// TODO - cand un element HTML il iei si il folosesti o singura data, nu e necesar sa il iei in variabila
// de exemplu poti face direct : document.getElementById("no-delete").addEventListener("click", closeDeleteModal);

const deleteModal = document.getElementById("deleteMovieModal");
const discardDeleteModalBtn = document.getElementById("no-delete");
const confirmDeleteBtn = document.getElementById("yes-delete");
const closeDeleteModalBtn = document.getElementById("close-delete-btn");

const openDeleteModal = () => {
  displayElement(deleteModal);
};

const closeDeleteModal = () => {
  hideElement(deleteModal);
};
discardDeleteModalBtn.addEventListener("click", closeDeleteModal);
closeDeleteModalBtn.addEventListener("click", closeDeleteModal);
confirmDeleteBtn.addEventListener("click", () => {
  deleteMovieFromDb();
  hideElement(deleteModal);
  // showSuccessfulDeletePopUp();
  setTimeout(() => {
    window.location = "home.html";
  }, 3000);
});

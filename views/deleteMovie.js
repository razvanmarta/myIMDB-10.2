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

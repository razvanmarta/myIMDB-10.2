// burgerMenu- add .show to click on it
const burgerButton = document.getElementById("burgerButton");
burgerButton.addEventListener("click", () => {
  const ulList = document.getElementById("containsLi");
  if ((ulList.className = "hide")) {
    ulList.classList.remove("hide");
    ulList.classList.add("show");
  }
});
// hide menu-item on click outside the list of items
const outsideClick = document.getElementById("generalHideNavItem");
outsideClick.addEventListener("click", () => {
  const ulList = document.getElementById("containsLi");
  if ((ulList.className = "show")) {
    ulList.classList.remove("show");
    ulList.classList.add("hide");
  }
});

// burgerMenu- add .show
const burgerButton = document.getElementById("burgerButton");
const dropDownList = document.getElementById("dropDownList");
const outsideClick = document.getElementById("generalHideNavItem");

const home = document.getElementById("menu-home");
const login = document.getElementById("menu-login");
const register = document.getElementById("menu-register");

function toggleDropList() {
  dropDownList.classList.toggle("show");
}
//show or hide menu list
burgerButton.addEventListener("click", toggleDropList);

// hide menu-item on click outside the list of items
outsideClick.addEventListener("click", toggleDropList);

// hide home

home.addEventListener("click", toggleDropList);

// hide login

login.addEventListener("click", toggleDropList);

// hide register

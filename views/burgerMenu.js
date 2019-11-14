// TODO - try to group variables into an object
// // asta e pentru a evita "poluarea" scopului global ( obiectului window) cu prea multe variabile
// // punandu-le ca proprietati pe obiecte, ele devin oarecum "ascunse"

// burgerMenu- add .show
const burgerButton = document.getElementById("burgerButton");
const dropDownList = document.getElementById("dropDownList");
const outsideClick = document.getElementById("generalHideNavItem");
const homeBurgerBtn = document.getElementById("menuBurger-home");
const loginBurgerBtn = document.getElementById("menuBurger-login");
const registerBurgerBtn = document.getElementById("menuBurger-register");

function toggleDropList() {
  if ((dropDownList.className = "hideDropDownList")) {
    dropDownList.classList.remove("hideDropDownList");
    dropDownList.classList.add("showDropDownList");
  }
}

//show or hide menu list
burgerButton.addEventListener("click", toggleDropList);

// hide menu-item on click outside the list of items
outsideClick.addEventListener("click", () => {
  if ((dropDownList.className = "showDropDownList")) {
    dropDownList.classList.remove("showDropDownList");
    dropDownList.classList.add("hideDropDownList");
  }
});

// hide home

homeBurgerBtn.addEventListener("click", () => {
  if ((dropDownList.className = "showDropDownList")) {
    dropDownList.classList.remove("showDropDownList");
    dropDownList.classList.add("hideDropDownList");
  }
  window.location = "home.html";
});

// // hide login

loginBurgerBtn.addEventListener("click", () => {
  if ((dropDownList.className = "showDropDownList")) {
    dropDownList.classList.remove("showDropDownList");
    dropDownList.classList.add("hideDropDownList");
  }
  displayElement(modalLogin);
});

registerBurgerBtn.addEventListener("click", () => {
  if ((dropDownList.className = "showDropDownList")) {
    dropDownList.classList.remove("showDropDownList");
    dropDownList.classList.add("hideDropDownList");
  }
  displayElement(modalAuth);
});

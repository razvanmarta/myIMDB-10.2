const burgerButton = document.getElementById("burgerButton");
const dropDownList = document.getElementById("dropDownList");
const outsideClick = document.getElementById("generalHideNavItem");
const homeBurgerBtn = document.getElementById("menuBurger-home");
const loginBurgerBtn = document.getElementById("menuBurger-login");
const registerBurgerBtn = document.getElementById("menuBurger-register");
const logoutBurgerBtn = document.getElementById("menuBurger-logout");
const creatorsBurgerBtn = document.getElementById("menuBurger-creators");

function toggleDropList() {
  if ((dropDownList.className = "hideDropDownList")) {
    dropDownList.classList.remove("hideDropDownList");
    dropDownList.classList.add("showDropDownList");
  }
}

//show or hide menu list
burgerButton.addEventListener("click", toggleDropList);

//logout burger menu
logoutBurgerBtn.addEventListener("click", () => {
  if ((dropDownList.className = "showDropDownList")) {
    dropDownList.classList.remove("showDropDownList");
    dropDownList.classList.add("hideDropDownList");
  }
  showUserIsLoggedOut();
});

// hide menu-item on click outside the list of items
outsideClick.addEventListener("click", event => {
  console.log(event.target.parentElement);
  console.log(event.target.firstElementChild);
  if (
    event.target.parentElement !== dropDownList &&
    event.target.parentElement.firstElementChild !== burgerButton
  ) {
    dropDownList.classList.remove("showDropDownList");
    dropDownList.classList.add("hideDropDownList");
  }
  // if ((dropDownList.className = "showDropDownList")) {
  // }
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

creatorsBurgerBtn.addEventListener("click", () => {
  if ((dropDownList.className = "showDropDownList")) {
    dropDownList.classList.remove("showDropDownList");
    dropDownList.classList.add("hideDropDownList");
  }
  window.location = "creators.html";
});

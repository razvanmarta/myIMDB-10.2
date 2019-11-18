const boxes = document.getElementsByClassName("inner");
const creatorsPopup = document.getElementById("creators-picture-modal");
const creatorsImages = document.getElementsByClassName("resize");
const creatorsPopupContainer = document.getElementById(
  "picture-dialog-container"
);

// Outside click function

function outsideModalCreators(event) {
  if (event.target === modalAuth) {
    fadeOutModal(modalAuth);
  }
  if (event.target === modalLogin) {
    fadeOutModal(modalLogin);
  }
  if (event.target === creatorsPopup) {
    fadeOutModal(creatorsPopup);
  }
}
window.addEventListener("click", outsideModalCreators);

//Open and close stage boxes and text

for (let i = 0; i < boxes.length; i++) {
  let item = boxes[i];

  //initial state
  item.children[1].classList.add("hideCreatorsBox");

  item.children[0].addEventListener("click", () => {
    if (item.children[1].classList.contains("showCreatorsBox")) {
      item.children[1].classList.remove("showCreatorsBox");
      item.children[1].classList.add("hideCreatorsBox");
      item.parentElement.children[0].style.display = "block";
      setTimeout(() => {
        item.parentElement.children[0].style.display = "none";
      }, 1000);
    } else {
      item.children[1].classList.add("showCreatorsBox");
      item.children[1].classList.remove("hideCreatorsBox");
      item.parentElement.children[0].style.display = "none";
      setTimeout(() => {
        item.parentElement.children[0].style.display = "block";
      }, 1000);
    }
  });
}

// Popup for full size image view

for (let i = 0; i < creatorsImages.length; i++) {
  creatorsImages[i].addEventListener("click", () => {
    let img = document.createElement("img");
    img.src = creatorsImages[i].src;
    creatorsPopupContainer.innerHTML = "";
    creatorsPopupContainer.appendChild(img);
    displayElement(creatorsPopup);
  });
}

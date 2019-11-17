const creatorsPopup = document.getElementById("creators-picture-modal");
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

const boxes = document.getElementsByClassName("inner");

for (let i = 0; i < boxes.length; i++) {
  let item = boxes[i];

  //initial state
  item.children[1].classList.add("hideCreatorsBox");

  item.children[0].addEventListener("click", () => {
    if (item.children[1].classList.contains("showCreatorsBox")) {
      item.children[1].classList.remove("showCreatorsBox");
      item.children[1].classList.add("hideCreatorsBox");
    } else {
      item.children[1].classList.add("showCreatorsBox");
      item.children[1].classList.remove("hideCreatorsBox");
    }
  });
}

//popup for full size image view
const creatorsImages = document.getElementsByClassName("resize");
const creatorsPopupContainer = document.getElementById(
  "picture-dialog-container"
);
for (let i = 0; i < creatorsImages.length; i++) {
  creatorsImages[i].addEventListener("click", () => {
    let img = document.createElement("img");
    img.src = creatorsImages[i].src;
    creatorsPopupContainer.innerHTML = "";
    creatorsPopupContainer.appendChild(img);
    displayElement(creatorsPopup);
  });
}

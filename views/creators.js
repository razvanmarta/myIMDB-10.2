function outsideModal(event) {
  if (event.target === modalAuth) {
    fadeOutModal(modalAuth);
  }
  if (event.target === modalLogin) {
    fadeOutModal(modalLogin);
  }
}
window.addEventListener("click", outsideModal);

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

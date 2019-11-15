const detailsPageError = () => {
  return new Promise((resolve, reject) => {
    const detailsContainer = document.getElementById("movie");
    detailsContainer.innerHTML = `
    <div class="container">
      <hr/>
      <p class="text-center">
        There was an error processing your request! <a href="#" class="alert-link">Go back to movie list and try again</a>. Click the button bellow.
      </p>
      <hr/>
      <div class = "d-flex justify-content-center m-3">
        <button type="button" class="btn btn-warning reload">Go back</button>
      </div>
      <hr/>
    </div>
    `;
    const reloadBtn = detailsContainer.querySelector(".reload");
    resolve(reloadBtn);
  });
};
const redirectToHome = container => {
  container.addEventListener("click", handleRedirectToHome);
};

const handleRedirectToHome = () => {
  const container = document.querySelector(".card");
  const popUp = document.createElement("p");
  popUp.classList.add("text-center");
  popUp.classList.add("alert-link");
  container.appendChild(popUp);
  let timer = 3;
  const countdown = setInterval(() => {
    console.log(timer);
    popUp.innerHTML = `Redirecting to Home Page in ${timer} seconds`;
    timer--;
  }, 1000);
  setTimeout(() => {
    clearInterval(countdown);
    window.location = "home.html";
  }, 4000);
};

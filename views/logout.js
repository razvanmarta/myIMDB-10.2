// TODO - functia de logout trebuie sa fie in Auth.js

const logOut = token => {
  fetch(logoutURL, {
    method: "GET",
    headers: {
      "x-auth-token": `${token}`
    }
  })
    .then(response => {
      if (window.location.href.includes("details.html")) {
        movieDetails.displayMovieDetails();
      }
      return response.json();
    })
    .then(message => console.log(message));
};

const logOut = token => {
  console.log(token);
  fetch(logoutURL, {
    method: "GET",
    headers: {
      "x-auth-token": `${token}`
    }
  })
    .then(response => {
      if (window.location.pathname === "/myIMDB-10.2/pages/details.html") {
        movieDetails.displayMovieDetails();
      }
      console.log(response);
      return response.json();
    })
    .then(message => console.log(message));
};

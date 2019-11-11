const logOut = token => {
  console.log(token);
  fetch(logoutURL, {
    method: "GET",
    headers: {
      "x-auth-token": `${token}`
    }
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(message => console.log(message));
};

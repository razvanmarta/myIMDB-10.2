const apiURLl = "https://movies-api-siit.herokuapp.com";
const registerURL = apiURLl + "/auth/register";
const loginURL = apiURLl + "/auth/login";
const logoutURL = apiURLl + "/auth/logout";

const registerButton = document.getElementById('register-button');
registerButton.addEventListener('click', function(){
    
    document.getElementById('modal-auth').showModal();
    }
)

//hardcoded user (for testing purposes only)
let user = {
  username: "-=687697846876",
  password: "1234"
};

//register function
function registerNewUser(url, user) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(data => console.log(data));
}

//login function
function logIn(url, user) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

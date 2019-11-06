const apiURLl = "https://movies-api-siit.herokuapp.com";
const registerURL = apiURLl + "/auth/register";
const loginURL = apiURLl + "/auth/login";
const logoutURL = apiURLl + "/auth/logout";

// Open register-modal
const registerButton = document.getElementById('register-button');
registerButton.addEventListener('click', function(){    
    document.getElementById('modal-auth').showModal();    
    }
)

// Close register-modal + empty fields and hide alert if it's the case

const closeRegister = document.getElementById('close-register-btn');
closeRegister.addEventListener('click', function(){  
  document.getElementById('modal-auth').close();
  document.getElementById('exampleInputUsername').value = "";
  document.getElementById('exampleInputPassword1').value = "";
  document.getElementById('exampleInputPassword2').value = "";
  let registerAlert = document.getElementById('register-alert');
  registerAlert.classList.add('hidden');
  registerAlert.innerHTML = ""; 

})

// Register button event

const addAccountButton = document.getElementById('create-account-button');
addAccountButton.addEventListener('click', function(event){  
  event.preventDefault();
  let userName = document.getElementById('exampleInputUsername').value;
  let password = document.getElementById('exampleInputPassword1').value;
  let confirmPassword = document.getElementById('exampleInputPassword2').value;
  let registerAlert = document.getElementById('register-alert'); 
   

  if(!registerAlert.classList.contains('hidden')){
    registerAlert.classList.add('hidden');
    registerAlert.innerHTML = "";    
  }

  if(userName === ""){
    registerAlert.classList.remove('hidden');
    registerAlert.innerHTML = "Username cannot be empty";
    return;
  }

  if(password.length < 8) {
    registerAlert.classList.remove('hidden');
    registerAlert.innerHTML = "Password must be at least 8 characters.";
    return;
   }

  if (password !== confirmPassword) {
    registerAlert.classList.remove('hidden');
    registerAlert.innerHTML = "Passwords do not match! ";
    return;
  }

  let user = {
    username : userName,
    password : password
  };

  registerNewUser(registerURL, user);
})


// Register function
function registerNewUser(url, user) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {      
      console.log('RESPONSE: ',response)
      if(response.status == 200){
        document.getElementById('modal-auth').close();
        document.getElementById('exampleInputUsername').value = "";
        document.getElementById('exampleInputPassword1').value = "";
        document.getElementById('exampleInputPassword2').value = "";
        
        alert('Registration done');
      }else if (response.status == 409){
        let registerAlert = document.getElementById('register-alert'); 
        registerAlert.innerHTML = "Username already exists!";
        registerAlert.classList.remove('hidden');
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      const {accessToken} = data
      console.log(accessToken)
      sessionStorage.setItem("accessToken", accessToken)
    });
}

// Login function
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

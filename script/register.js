const API_BASE_URL = "http://localhost:8080/";

function register() {
  const registrationForm = document.getElementById("registration-form");
  registrationForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const enteredUsername = document.getElementById("username-field");
    const enteredPassword = document.getElementById("password-field");

    fetch(API_BASE_URL + "register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: enteredUsername.value,
            password: enteredPassword.value,
          }) 
    })
    .then(response => {
      if (response.ok) {
        console.log("Registration successful");
      } else {
        throw new Error(`HTTP error: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error("Error in registration operation: ", error.message);
      console.log("Registration failed.");
    });
  });
}

register();

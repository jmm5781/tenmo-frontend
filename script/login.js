const API_BASE_URL = "http://localhost:8080/";

function login() {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const enteredUsername = document.getElementById("username-field");
    const enteredPassword = document.getElementById("password-field");

    fetch(API_BASE_URL + "login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: enteredUsername.value,
        password: enteredPassword.value,
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("authToken", data.token);
          console.log("Login successful");
        } else {
          console.log("Login failed");
        }
      })
      .catch((error) => console.error("Error in fetch operation: ", error));
  });
}

login();

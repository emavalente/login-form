console.log("Script from JS");
const password = document.querySelector("#password");
const togglePass = document.querySelector("#togglePass");

function showAndHide() {
  if (password.type === "password") {
    password.type = "text";
    togglePass.name = "eye-off-outline";
  } else {
    password.type = "password";
    togglePass.name = "eye-outline";
  }
}

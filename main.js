//Tombol Masuk or regist #masih_cacat
let emailInput = document.querySelector(".email");
let passwordInput = document.querySelector(".password");
let inputButton = document.querySelector(".button");

inputButton.disabled = true;

emailInput.addEventListener("input", success);
passwordInput.addEventListener("input", success);

function success() {
    let emailValue = emailInput.value.trim();
    let passwordValue = passwordInput.value.trim();
    if (emailInput.value.length > 0 && passwordInput.value.length > 0) {
        inputButton.disabled = false;
    }
    else {
        inputButton.disabled = true;
    }
}

//Tombol Eye Password
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector(".password");

togglePassword.addEventListener("click", function () {
    // toggle type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password"; password.setAttribute("type", type);
       
    // toggle icon
    this.classList.toggle("eye-slash");
        });
        
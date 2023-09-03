//Tombol Masuk or regist #masih_cacat
let input = document.querySelector(".email") && document.querySelector(".password");
let inputButton = document.querySelector(".button");

inputButton.disabled = true;

input.addEventListener("change", success);

function success() {
    if (input.value.length > 0 ) {
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
        
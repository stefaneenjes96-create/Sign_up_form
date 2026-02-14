const create_button = document.querySelector("button");

const password = document.querySelector("#password")
const confirmedPassword = document.querySelector("#confirm_password")

console.log(create_button)

create_button.addEventListener("click", () => {
    console.log(password)
    if (password.value !== confirmedPassword.value) {
        console.log("passwords do not match");
        password.style.borderColor = "red";
        confirmedPassword.style.borderColor = "red";
    }   else {
        password.style.borderColor = "#562F00";
        confirmedPassword.style.borderColor = "#562F00";
    }
})
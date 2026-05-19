const registerDiv = document.getElementsByClassName("header-text");
const registerText = registerDiv[0];

const loginButton = document.getElementsByClassName("login-button")[0];

const optionText = document.getElementById("option-hyperlink");

let isClicked = false;

optionText.addEventListener("click", () => {    
    if (isClicked) {
        registerText.textContent = "Register";
        registerText.style.color = "Black";
        loginButton.innerText = "Register";
    }
    else {
        registerText.textContent = "Login";
        registerText.style.color = "Red";
        loginButton.innerText = "Login";
        loginButton.style.borderColor = "red";
        loginButton.style.borderWidth = "2px";
        loginButton.style.borderStyle = "solid";
    }

    isClicked = !isClicked;
});
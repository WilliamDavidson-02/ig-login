const igScreen1 = document.getElementById("ig-screen-1");
const igScreen2 = document.getElementById("ig-screen-2");
const igLoginBtn = document.getElementById("ig-login-btn");
const igUsernameInput = document.getElementById("login-username");
const igPasswordInput = document.getElementById("login-password");
const igPlaceholderUsername = document.getElementById("username-placeholder");
const igPlaceholderPassword = document.getElementById("password-placeholder");

let timer = 0;
let startingAnimation = true;

setInterval(() => {
    timer = timer < 5 ? timer + 1 : 0;
    if(startingAnimation) {
        animationStart();
    } else {
        loopScreenImages();
    }
}, 1000)

function animationStart() {
    if(timer === 3) {
        igScreen1.classList.add("ig-screen-out");
        igScreen2.classList.add("ig-screen-in");
        startingAnimation = false;
    }
}

function loopScreenImages() {
    if(timer === 3) {
        if(igScreen2.classList.contains("ig-screen-in")) {
            igScreen1.classList.replace("ig-screen-out", "ig-screen-in");
            igScreen1.src = igScreen1.src.substring(igScreen1.src.lastIndexOf('/')+1) === "ig-1.png" ? "img/ig-3.png" : "img/ig-1.png";
            igScreen2.classList.replace("ig-screen-in", "ig-screen-out");
        } else if (igScreen2.classList.contains("ig-screen-out")) {
            igScreen1.classList.replace("ig-screen-in", "ig-screen-out");
            igScreen2.classList.replace("ig-screen-out", "ig-screen-in");
            igScreen2.src = igScreen2.src.substring(igScreen2.src.lastIndexOf('/')+1) === "ig-2.png" ? "img/ig-4.png" : "img/ig-2.png";
        }
    }
}

function loginInputChecks() {
    if(igUsernameInput.value.length >= 1) {
        igPlaceholderUsername.classList.add("active-login-placeholder");
    } else if (igUsernameInput.value.length === 0) {
        igPlaceholderUsername.classList.remove("active-login-placeholder");
    }

    if(igPasswordInput.value.length >= 1) {
        igPlaceholderPassword.classList.add("active-login-placeholder");
    } else if (igPasswordInput.value.length === 0) {
        igPlaceholderPassword.classList.remove("active-login-placeholder");
    }

    if(igPasswordInput.value.length >= 1 && igUsernameInput.value.length >= 1) {
        igLoginBtn.classList.add("ig-login-btn-active");
    } else if(igPasswordInput.value.lenght === 0 && igUsernameInput.value.lenght === 0) {
        igLoginBtn.classList.remove("ig-login-btn-active");
    }
}

igUsernameInput.addEventListener("input", loginInputChecks);
igPasswordInput.addEventListener("input", loginInputChecks);
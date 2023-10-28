

const lock = document.getElementById("lockKey");
const open = document.getElementById("openKey");
const passwordToggle = document.getElementById("password")

lock.addEventListener("click", function () {
    if (passwordToggle.type = "password") {
        passwordToggle.type = "text"
        lock.style.display = "none"
        open.style.display = "block"
    }
})

// for password shown
open.addEventListener("click", function () {
    if (passwordToggle.type = "text") {
        passwordToggle.type = "password"
        open.style.display = "none"
        lock.style.display = "block"
    }
})

// for remember Me
const clientEmail = document.getElementById("email");
const clientName = document.getElementById("name")
let submitFormButton = document.getElementById("submitBtn")
let clientSave = document.getElementById("rememberMe");
let userName = document.querySelector(".userNameContainer")
submitFormButton.addEventListener("click", function (searchReal) {
    console.log(passwordToggle.value)
    console.log(clientEmail.value);
    // alert(clientName.value)
    // alert (`Logged in as ${clientName.value}`)
    // userName.textContent = clientName.value;
})

// for login section
let cardContainerAll = document.querySelector(".card")
const regsirteredUser = document.getElementById("registredUser");
let backCard = document.querySelector(".cardBack");
let frontCard = document.querySelector(".cardFront");
regsirteredUser.addEventListener("click", function OpenLogIn() {
    if (backCard.style.display = "none") {
        backCard.style.display = "block"
        frontCard.style.display = "none"  
    }
})
// for displaying the cardBack section
const userLogin = document.getElementById("registredUser-CardBack");
userLogin.addEventListener("click", function OpenRegister() {
    if (frontCard.style.display = "none") {
        frontCard.style.display = "block"
        backCard.style.display = "none"
    }
})

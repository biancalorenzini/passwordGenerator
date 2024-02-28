let sliderElemnt = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#sliderValue");
let password = document.querySelector("#password");
let message = document.querySelector("#message");
let containerPassword = document.querySelector("#showPassword");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let newPassword = "";

sizePassword.innerHTML = sliderElemnt.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElemnt.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    console.log(pass);

    containerPassword.classList.remove("hide")

    password.innerHTML = pass;
    newPassword = pass;
}

function copyPassword(){
    navigator.clipboard.writeText(newPassword)
    message.innerHTML = "Your password was copied"
}
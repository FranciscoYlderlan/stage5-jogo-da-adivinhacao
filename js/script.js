import { element } from "./elements.js";

let randomNumber = Math.round(Math.random()*10);
let attemptsNumber= 0;

function handleSubmit (event) {
    event.preventDefault();
    
    let inputValue = element.inputNumber.value;
    attemptsNumber++;
    if(inputValue == randomNumber) {
        element.toggleScreen();
        element.message.innerHTML = `Acertou em ${attemptsNumber} tentativas`;
    }
    element.inputNumber.value = "";
}

function handleTryAgain() {
    randomNumber = Math.round(Math.random()*10);
    attemptsNumber = 0;
    element.toggleScreen();
}

element.btnSubmit.addEventListener("click",handleSubmit);


element.btnTryAgain.addEventListener("click",handleTryAgain);

document.addEventListener("keydown", event => {
    if(event.key == "Enter") {
        handleSubmit();
    }
})

export const element = {
    inputNumber: document.querySelector(".screen1 input"),
    btnSubmit: document.querySelector(".screen1 button"),
    btnTryAgain: document.querySelector(".screen2 button"),
    screen1: document.querySelector(".screen1"),
    screen2: document.querySelector(".screen2"),
    message: document.querySelector("h2"),
    toggleScreen(){
        this.screen1.classList.toggle("hide");
        this.screen2.classList.toggle("hide");
    }

}
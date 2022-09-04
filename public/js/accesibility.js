// Este es un modo accesible para personas con discapacidad (visual leve B2 y B3, daltonismo)

let head = document.querySelector("head")
let header = document.querySelector("header")
window.onload = function () {
    let main = document.querySelector("main")

    let accesibility = confirm("¿Desea visualizar la barra de accesibilidad?")

    if (accesibility) {
        let menuAccesibility = document.querySelector(".menuAccesibility")
        menuAccesibility.className = "menuAccesibilityOn"
    }

    let fontSM = document.querySelector(".acText1")
    fontSM.addEventListener("click", () => {
        main.style.fontSize = "medium"
    })
    let fontMD = document.querySelector(".acText2")
    fontMD.addEventListener("click", () => {
        main.style.fontSize = "large"
    })
    let fontLG = document.querySelector(".acText3")
    fontLG.addEventListener("click", () => {
        main.style.fontSize = "x-large"
    })
}

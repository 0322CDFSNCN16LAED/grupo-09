let buttonAddTToCart = document.querySelector(".addButton")
let addedToCart = document.querySelector("#addedToCart")
let deleteItem = document.querySelector("#deleteItem")
let selectPeople = document.querySelector("#selectPeople")
let price = document.querySelector("#price")
let pricePerPeople = document.querySelector("#pricePerPeople")
let select = document.getElementById("selectPeople")
let selectValue = select.value

const opinion =
    " this has been one of yhe best tours I have ever made. The guidance was great and the path we follow arrown the city was marvlouswefwewqf fef4  33r5asc r3rdf"

addedToCart.classList.add("hide")
window.onload = function () {
    buttonAddTToCart.addEventListener("click", () => {
        addedToCart.classList.remove("hide")
    })
    deleteItem.addEventListener("click", () => {
        addedToCart.classList.add("hide")
    })
   /* if ((selectValue = 2)) {
        price.innerHTML = price + 2
    }*/ 
}

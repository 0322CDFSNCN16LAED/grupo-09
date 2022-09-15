let buttonAddTToCart = document.querySelector(".addButton")
let addedToCart = document.querySelector("#addedToCart")
let deleteItem = document.querySelector("#deleteItem")
let confirmItem = document.querySelector("#confirmItem")

addedToCart.classList.add("hide")
window.onload = function () {
    buttonAddTToCart.addEventListener("click", () => {
        addedToCart.classList.remove("hide")
    })
    deleteItem.addEventListener("click", () => {
        addedToCart.classList.add("hide")
    })
    confirmItem.addEventListener("click", () => {
        swal("Excelente", "Gracias por elegirnos!", "success")
    })
}

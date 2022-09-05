const isEmpty = (input) => input.value.trim() != ""

const validations = [
    {
        inputName: "email",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Debes agregar un email",
            },
        ],
    },
    {
        inputName: "password",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Debes ingresar tu contraseña",
            },
        ],
    },
]

window.onload = function () {
    const formulario = document.querySelector("#formulario")
    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    //-------------------DE REGISTRO DE PELÍCULAS------------------//

    formulario.addEventListener("submit", (evt) => {
        evt.preventDefault()
        const errores = []

        //Hacer las validaciones
        validations.forEach((inputToValidate) => {
            const input = formulario[inputToValidate.inputName]
            for (const validation of inputToValidate.validations) {
                const isValid = validation.validator(input)
                if (!isValid) {
                    errores.push(validation.errorMsg)
                    input.parentElement.classList.add("is-invalid")
                    input.parentElement.classList.remove("is-valid")
                    input.parentElement.querySelector(".error").innerHTML =
                        validation.errorMsg
                    return
                }
            }
            input.parentElement.classList.add("is-valid")
            input.parentElement.classList.remove("is-invalid")
            input.parentElement.querySelector(".error").innerHTML = ""
            document.querySelector(
                ".form-login"
            ).getElementsByClassName.height = "450px"
        })

        //Si no fallaron las validaciones
        if (errores.length == 0) {
            formulario.submit()
            console.log("estoy aca")
        }
    })
}

const isEmpty = (input) => input.value.trim() != ""

const validations = [
    {
        inputName: "image",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes agregar una imágen",
            },
        ],
    },
   
    {
        inputName: "name",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes agregar un nombre al tour",
            },
        ],
    },
    {
        inputName: "description",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes agregar una descripción",
            },
        ],
    },
    {
        inputName: "opinions",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes ingresar cantidad de opiniones",
            },
        ],
    },
    {
        inputName: "rate",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes agregar un rating",
            },            
        ],
    },
    {
        inputName: "city",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes agregar una ciudad",
            },            
        ],
    },
    {
        inputName: "continent",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes agregar un continente",
            },            
        ],
    },
    {
        inputName: "price",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "1-Debes agregar un precio",
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
        })

        //Si no fallaron las validaciones
        if (errores.length == 0) {
            formulario.submit()
            console.log("estoy aca")
        }
    })
}

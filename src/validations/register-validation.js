const { body } = require('express-validator')

module.exports = [
    body('name').notEmpty().withMessage('Este campo debe estar completo.'),
    body('email').isEmail().withMessage('Debes colocar un email valido.'),
    body('phoneNumber').notEmpty().withMessage('Debes colocar un celular.'),
    /*Buscar metodo de express valkidaor que valide que el campo contenga un numero de celular*/
    body('password')
        .isLength(5)
        .withMessage('Tu contraseña debe tener un minimo de 5 caracteres'),
    body('rePassword').custom((value, extra) => {
        if (value !== extra.req.body.password) {
            throw new Error(
                'La contraseña repetida no coincide con la original'
            )
        }

        // Indicates the success of this synchronous custom validator
        return true
    }),
    // body("avatar").notEmpty().withMessage("Debes cargar una imagen.")
]

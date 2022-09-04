const { body } = require('express-validator')

module.exports = [
    body('name').notEmpty().withMessage('Este campo debe estar completo.'),
    body('description')
        .notEmpty()
        .withMessage('Este campo debe estar completo.'),
    body('opinions').notEmpty().withMessage('Este campo debe estar completo.'),
    body('rate').notEmpty().withMessage('Este campo debe estar completo.'),
    body('city').notEmpty().withMessage('Este campo debe estar completo.'),
    body('continent').notEmpty().withMessage('Este campo debe estar completo.'),
    body('price').notEmpty().withMessage('Este campo debe estar completo.'),
    body('discount').notEmpty().withMessage('Este campo debe estar completo.'),
]

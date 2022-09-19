const { check } = require('express-validator')

module.exports = [
    check('name').notEmpty().withMessage('Este campo debe estar completo.'),
    check('description').notEmpty().withMessage('Este campo debe estar completo.'),
    check('opinions').notEmpty().withMessage('Este campo debe estar completo.'),
    check('rate').notEmpty().withMessage('Este campo debe estar completo.'),
    check('city').notEmpty().withMessage('Este campo debe estar completo.'),
    check('continent').notEmpty().withMessage('Este campo debe estar completo.'),
    check('price').notEmpty().withMessage('Este campo debe estar completo.'),
    check('discount').notEmpty().withMessage('Este campo debe estar completo.'),
    check('country').notEmpty().withMessage('Este campo debe estar completo.'),
]

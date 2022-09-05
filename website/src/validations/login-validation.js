const { check } = require('express-validator')

module.exports = [
    check('email').isEmail().withMessage('Email inválido'),
    check('password')
        .isLength({ min: 5 })
        .withMessage('La contraseña debe tener al menos 5 caracteres'),
]

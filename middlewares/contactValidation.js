const { check } = require('express-validator');

module.exports = [
    check("name")
    .notEmpty()
    .withMessage("Debés ingresar tu nombre")
    .not().isNumeric()
    .withMessage("Nombre tiene que ser una cadena de texto")
    .bail()
    .isLength({ min: 4 })
    .withMessage("Nombre debe tener más de 3 caracteres"),

    check("email")
    .notEmpty()
    .withMessage("Debes escribir un email")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un email válido"),

];
const { check, body } = require('express-validator')
let bcrypt = require('bcryptjs')
const db = require('../models');

module.exports = [
    check("email")
    .notEmpty()
    .withMessage("Debes escribir un email")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un email válido"),

    check('password')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body('email')
    .custom(value => {
        return db.Users.findOne({
            where: {
                email : value
            }
        })
        .then(user => {
            if(!user){
                return Promise.reject("Email incorrecto")
            }
        })
    }),
  
    body("password").custom((value, { req }) => {
        return db.Users.findOne({
            where: {
                email: req.body.email,
            },
        })
        .then((user) => {
            if (!bcrypt.compareSync(req.body.password, user.dataValues.password)) {
                return Promise.reject();
            }
        })
        .catch((error) => {
            return Promise.reject("Contraseña incorrecta");
        });
    }),
];

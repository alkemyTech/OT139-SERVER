const user = require("../models/user");
const bcrypt = require("bcryptjs");

exports.signup = function (req, res) {
    try {
        user.findAll({
            attributes: ['email'],
            where: { email: `${req.body.email}` }
        }).then(async function (emails) {
            if (emails.length == 0) {
                let contraseña = req.body.password
                let rounds = 10
                const encryptedPassword = await bcrypt.hash(contraseña, rounds)
                return user.create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: encryptedPassword
                }).then(function (users) {
                    if (users) {
                        res.send(users);
                    } else {
                        res.status(400).send('Error in insert new record');
                    }
                });
            }
            else {
                res.status(400).send('email be in use,try with other email');
            }
        });
    }
    catch (error) {
        console.log(error);
    };
};
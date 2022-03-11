const { validationResult } = require('express-validator');
const db = require('../models');
const bcrypt = require("bcryptjs");
const { OK, BAD_REQUEST } = require('../constants/httpCodes');

exports.signUp = async (req , res) => {
  try {
    const email = await db.users.findAll({
      attributes: ['email'],
      where: { email: `${req.body.email}` }
    });
    if (email.length == 0) {
      let contraseña = req.body.password
      let rounds = 10
      const encryptedPassword = await bcrypt.hash(contraseña, rounds)
      const users = await db.users.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: encryptedPassword
      });
      if (users) {
        res.status(200).send(users);
      } else {
        res.status(400).send('Error,try insert new record');
      }
    }
    else {
      res.status(400).send('email be in use,try with other email');
    }
  }
  catch (error) {
    res.status(BAD_REQUEST).send({ msg: 'there is an error with the server,try later' });
    console.error(error.message);
  };
};

exports.deleteUser = async (req, res) => {
  try {
    await db.users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(OK).send('Fue Dado de Baja exitosamente! Hasta Pronto!');
  } catch (errors) {
    res
      .status(BAD_REQUEST)
      .send({ msg: 'Ocurrio un error al tratar de dar de baja al usuario' });
    console.error(errors.message);
  }
};

module.exports = {
  deleteUser,
  authUser,
};

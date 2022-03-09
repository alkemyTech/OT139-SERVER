const db = require('../models');
const bcrypt = require("bcryptjs");
const { OK, BAD_REQUEST } = require('../constants/httpCodes');

exports.signup = function (req, res) {
  try {
      db.user.findAll({
          attributes: ['email'],
          where: { email: `${req.body.email}` }
      }).then(async function (emails) {
          if (emails.length == 0) {
              let contraseña = req.body.password
              let rounds = 10
              const encryptedPassword = await bcrypt.hash(contraseña, rounds)
              return db.user.create({
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  email: req.body.email,
                  password: encryptedPassword
              }).then(function (users) {
                  if (users) {
                      res.status(200).send(users);
                  } else {
                      res.status(400).send('Error,try insert new record');
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

exports.deleteUser = async (req, res) => {
  try {
    await db.user.destroy({
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

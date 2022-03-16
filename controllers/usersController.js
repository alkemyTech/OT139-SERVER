const { validationResult } = require('express-validator');
const db = require('../models');
const {
  OK,
  BAD_REQUEST,
  UNAUTHORIZED,
  INTERNAL_SERVER_ERROR,
} = require('../constants/httpCodes');

const signUp = async (req , res) => {
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
        res.status(OK).send(users);
      } else {
        res.status(BAD_REQUEST).send('Error,try insert new record');
      }
    }
    else {
      res.status(OK).send('email be in use,try with other email');
    }
  }
  catch (error) {
    res.status(BAD_REQUEST).send({ msg: 'there is an error with the server,try later' });
  };
};

const authUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(BAD_REQUEST).json({ errors: errors.array(), ok: false });
  }

  const { email, password } = req.body;
}

const getAll = async (req, res, next) => {
  try {
    db.users.findAll()
      .then(users => {
        return res.status(OK).json({
          results: users
        })
      })
  } catch (error) {
    res
      .status(BAD_REQUEST)
      .send({ msg: 'Ocurrio un error al traer a los usuarios' });
  }
}

const deleteUser = async (req, res) => {
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
  signUp,
  getAll
};

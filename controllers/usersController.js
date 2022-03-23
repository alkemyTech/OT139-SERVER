const { validationResult } = require('express-validator');
const { hash } = require('bcrypt');
const db = require('../models');
const {
  OK,
  BAD_REQUEST,
  UNAUTHORIZED,
  INTERNAL_SERVER_ERROR,
} = require('../constants/httpCodes');
const {
  generateJsonWebToken,
  verifyJsonWebToken,
} = require('./../helpers/jwt');

const signUp = async (req, res) => {
  try {
    const email = await db.Users.findAll({
      attributes: ['email'],
      where: { email: `${req.body.email}` },
    });
    if (email.length == 0) {
      let contraseña = req.body.password;
      let rounds = 10;
      const encryptedPassword = await hash(contraseña, rounds);
      const user = await db.Users.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: encryptedPassword,
        roleId: 2,
      });

      if (user) {
        // const token = await generateJsonWebToken(users.dataValues);
        const newUser = { user, token: user.password };
        res.status(OK).json(newUser);
      } else {
        res.status(BAD_REQUEST).json({ msg: 'Error,try insert new record' });
      }
    } else {
      res.status(OK).json({ msg: 'email be in use,try with other email' });
    }
  } catch (error) {
    res
      .status(BAD_REQUEST)
      .send({ msg: 'there is an error with the server,try later' });
  }
};

const authUser = async (req, res, next) => {
  const errors = validationResult(req);
  const { email } = req.body;

  if (!errors.isEmpty()) {
    return res.status(BAD_REQUEST).json({ errors: errors.array(), ok: false });
  }

  try {
    const user = await db.Users.findOne({ where: { email } });
    // const token = await generateJsonWebToken(user);

    res.json({ user, token: user.password });
  } catch (error) {
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ ok: false, msg: 'internal server error', error });
  }
};

const getAll = async (req, res, next) => {
  try {
    db.Users.findAll().then((users) => {
      return res.status(OK).json({
        results: users,
      });
    });
  } catch (error) {
    res
      .status(BAD_REQUEST)
      .send({ msg: 'Ocurrio un error al traer a los usuarios' });
  }
};

const deleteUser = async (req, res) => {
  try {
    await db.Users.destroy({
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
  getAll,
};

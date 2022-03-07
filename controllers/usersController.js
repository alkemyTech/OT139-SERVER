const { validationResult } = require('express-validator');
const db = require('../models');
const {
  OK,
  BAD_REQUEST,
  UNAUTHORIZED,
  INTERNAL_SERVER_ERROR,
} = require('../constants/httpCodes');

const authUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(BAD_REQUEST).json({ errors: errors.array(), ok: false });
  }

  const { email, password } = req.body;

  try {
    const user = await db.User.findOne({
      where: {
        email,
      },
    });

    if (user && user.password === password) {
      res.json(user);
    } else {
      res.status(UNAUTHORIZED).json({ ok: false });
    }
  } catch (error) {
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ ok: false, msg: 'internal server error', error });
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await db.User.destroy({
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

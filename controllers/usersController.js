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
}

exports.getAll = async (req, res, next) => {
  try {
    db.User.findAll()
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

exports.deleteUser = async (req, res) => {
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
  }
};


module.exports = {
  authUser,
};

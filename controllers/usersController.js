const { validationResult } = require('express-validator');
const verifyJsonWebToken = require('./jwt'); //change to real path
const db = require('../models');
const { getPassword } = require('../middleware/userValidation');

const authUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(), ok: false });
  }
  const { email, password } = req.body;

  const user = await db.User.findOne({
    where: {
      email,
    },
  });

  //remove line when user.token is added to main
  user.token = 'lijfeiajf';

  if (user && verifyJsonWebToken(user.token, getPassword) === password) {
    res.json(user);
  } else {
    res.status(401).json({ ok: false });
  }
};

module.exports = { authUser };

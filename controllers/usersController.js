const { validationResult } = require('express-validator');
//@TODO descomment line when jwt is ready
//const verifyJsonWebToken = require('../middleware/jwt');
const db = require('../models');
//@TODO descomment line when jwt is ready
//const { getPassword } = require('../middleware/userValidation');

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

  //@TODO descomment line when jwt is ready.
  //if (user && verifyJsonWebToken(user.token, getPassword) === password) {
  if (user && user.password === password) {
    res.json(user);
  } else {
    res.status(401).json({ ok: false });
  }
};

module.exports = { authUser };

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const db = require('../models/index.js');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await db.User.findAll();
  if (users) {
    res.json(users);
  }
});

//Mock jwt auth
const verifyJsonWebToken = (token, callback) => {
  return callback(null, { password: '1234567' });
};

const userValidation = () => {
  return [
    (body('email').isEmail().withMessage('Invalid Email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('password must be at least 6 chars long')),
  ];
};

router.post('/auth/login', userValidation(), async function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(), ok: false });
  }
  const { email, password } = req.body;

  const user = await db.User.findOne({
    where: {
      email: email,
    },
  });

  //remove line when user.token is added to main
  user.token = 'lijfeiajf';

  let passwordsMatch = false;
  if (user) {
    verifyJsonWebToken(user.token, (err, decoded) => {
      if (err) {
        return;
      } else if (decoded.password === password) {
        passwordsMatch = true;
      }
    });
  }

  if (!user || passwordsMatch === false) {
    res.status(401).json({ ok: false });
  } else {
    res.json(user);
  }
});

module.exports = router;

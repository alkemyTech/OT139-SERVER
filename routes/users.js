const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const db = require('../models/index.js');
const verifyJsonWebToken = require('./jwt'); //change to real path
const userValidation = require('../middleware/userValidation');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await db.User.findAll();
  if (users) {
    res.json(users);
  }
});

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

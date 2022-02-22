const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const db = require('models/index');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//Mock jwt auth
const verifyJsonWebToken = (token, callback) => {
  return callback({ password: '1234' });
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
  const user = await db.User.find({
    where: {
      email: email,
    },
  });

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

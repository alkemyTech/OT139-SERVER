const { body } = require('express-validator');

const userValidation = () => {
  return [
    (body('email').isEmail().withMessage('Invalid Email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('password must be at least 6 chars long')),
  ];
};

const getPassword = (err, decoded, password) => {
  if (err) return false;
  return decoded.password;
};

module.exports = { userValidation, getPassword };

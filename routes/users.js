const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { userValidation } = require('../middleware/userValidation');
const { authUser, deleteUser, signUp } = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/auth/login', userValidation(), authUser);
router.post('/auth/register',
[
body('firstName').exists(),
body('lastName').exists(),
body('email').exists().isEmail(),
body('password').exists().isLength({min:6}).withMessage('must be at least 6 chars long')
], signUp);
router.delete('/:id', deleteUser);

module.exports = router;

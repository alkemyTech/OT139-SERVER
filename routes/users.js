const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { isAdmin } = require('../middlewares/verify');
const { userValidation } = require('../middleware/userValidation');
const { authUser, deleteUser, signUp, getAll } = require('../controllers/usersController');

/* GET users listing. */
router.get('/', isAdmin, getAll);
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
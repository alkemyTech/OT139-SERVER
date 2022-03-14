const express = require('express');
var router = express.Router();
const { authUser, getAll, deleteUser, signUp } = require('../controllers/usersController');
const { userValidation } = require('../middleware/userValidation');

/* GET users listing. */
router.get('/', getAll);

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

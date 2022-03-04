const express = require('express');
const router = express.Router();
const user=require('../controllers/UserController');
const { body } = require('express-validator');

router.post('/register',
[
body('firstName').exists(),
body('lastName').exists(),
body('email').exists().isEmail(),
body('password').exists().isLength({min:8}).withMessage('must be at least 8 chars long')
],user.signup);

module.exports = router;
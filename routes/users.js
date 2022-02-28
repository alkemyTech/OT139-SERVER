var express = require('express');
var router = express.Router();
const usersControllers = require('../controllers/usersController')
const adminValidation = require('../middlewares/')

/* GET users listing. */
router.get('/', adminValidation, usersControllers.getAll);

module.exports = router;

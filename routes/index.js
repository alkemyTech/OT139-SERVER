const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersController')

/* GET home page. */
router.get('/', usersControllers.getAll);

module.exports = router;

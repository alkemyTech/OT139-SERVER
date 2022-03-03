const express = require('express');
const router = express.Router();
const { userValidation } = require('../middleware/userValidation');
const { authUser } = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/auth/login', userValidation(), authUser);

module.exports = router;
